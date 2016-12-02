// @flow

import {
  EventEmitter,
  EventSubscription,
} from 'fbemitter';

import invariant from 'invariant';

import {
  DeviceEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';

const {
  ExponentNotifications,
} = NativeModules;

type Notification = {
  origin: 'selected' | 'received';
  data: any;
  remote: boolean;
}

type LocalNotification = {
  title: string;
  // How should we deal with body being required on iOS but not on Android?
  body?: string;
  data?: any;
  silent?: boolean;

  // This is iOS specific in order to vibrate / play a sound.
  sound?: boolean;

  // This are Android specific, not supported/ on iOS. We should consider
  // renaming them.
  icon?: string;
  color?: string;
  priority?: string;
  sticky?: boolean;
  vibrate?: Array<number>;
  link?: string;
}

// Android assigns unique number to each notification natively.
// Since that's not supported on iOS, we generate an unique string.
type LocalNotificationId = string | number;

let _emitter;
let _initialNotification;

function _maybeInitEmitter() {
  if (!_emitter) {
    _emitter = new EventEmitter();
    DeviceEventEmitter.addListener('Exponent.notification', _emitNotification);
  }
}

function _emitNotification(notification) {
  if (typeof notification === 'string') {
    notification = JSON.parse(notification);
  }

  /* Don't mutate the original notification */
  notification = { ...notification };

  if (typeof notification.data === 'string') {
    try {
      notification.data = JSON.parse(notification.data);
    } catch(e) {
      // It's actually just a string, that's fine
    }
  }

  _emitter.emit('notification', notification);
}

function _processNotification(notification) {
  notification = Object.assign({}, notification);

  if (!notification.data) {
    notification.data = {};
  }

  if (notification.hasOwnProperty('count')) {
    delete notification.count;
  }

  return notification;
}

function _validateNotification(notification) {
  if (Platform.OS === 'ios') {
    invariant(
      !!notification.title && !!notification.body,
      'Local notifications on iOS require both a title and a body'
    );
  } else if (Platform.OS === 'android') {
    invariant(
      !!notification.title,
      'Local notifications on Android require a title'
    );
  }
}

export default {
  /* Only used internally to initialize the notification from top level props */
  _setInitialNotification(notification: Notification) {
    _initialNotification = notification;
  },

  /* Re-export, we can add flow here if we want as well */
  getExponentPushTokenAsync: ExponentNotifications.getExponentPushTokenAsync,

  /* Shows a notification instantly */
  presentLocalNotification(notification: LocalNotification): Promise<LocalNotificationId> {
    _validateNotification(notification);
    notification = _processNotification(notification);

    return ExponentNotifications.presentLocalNotification(notification);
  },

  /* Schedule a notification at a later date */
  async scheduleLocalNotification(
    notification: LocalNotification,
    options: {
      time?: Date | number;
      repeat?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
    }
  ): Promise<LocalNotificationId> {
    _validateNotification(notification);
    notification = _processNotification(notification);

    if (options.time && options.time instanceof Date) {
      options = {
        ...options,
        time: options.time.getTime(),
      };
    }

    return ExponentNotifications.scheduleLocalNotification(notification, options);
  },

  /* Dismiss currently shown notification with ID (Android only) */
  async dismissNotification(notificationId: LocalNotificationId): Promise<void> {
    if (Platform.OS === 'android') {
      return ExponentNotifications.dismissNotification(notificationId);
    } else {
      return Promise.reject('Dismissing notifications is not supported on iOS');
    }
  },

  /* Dismiss all currently shown notifications (Android only) */
  async dismissAllNotifications(): Promise<void> {
    if (Platform.OS === 'android') {
      return ExponentNotifications.dismissAllNotifications();
    } else {
      return Promise.reject('Dismissing notifications is not supported on iOS');
    }
  },

  /* Cancel scheduled notification notification with ID */
  async cancelScheduledNotification(notificationId: LocalNotificationId): Promise<void> {
    return ExponentNotifications.cancelScheduledNotification(notificationId);
  },

  /* Cancel all scheduled notifications */
  async cancelAllScheduledNotifications(): Promise<void> {
    return ExponentNotifications.cancelAllScheduledNotifications();
  },

  /* Primary public api */
  addListener(listener: Function): EventSubscription {
    _maybeInitEmitter();

    if (_initialNotification) {
      const initialNotification = _initialNotification;
      _initialNotification = null;
      setTimeout(() => {
        _emitNotification(initialNotification);
      }, 0);
    }

    return _emitter.addListener('notification', listener);
  },
};
