/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import PlacesStackNavigator from './src/navigators/stack/places/places.navigator';
import {init} from './src/db/db';
import COLORS from './src/constants/colors';
import SplashScreen from 'react-native-splash-screen';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

init()
  .then((res) => {
    console.log('Initialized database');
  })
  .catch((err) => {
    console.log('Database initializing failed');
    console.log(err);
  });

const App = () => {
  const triggerNotificationHandler = () => {
    // PushNotification.localNotification({
    //   channelId: 'local-notifications',
    //   title: 'Local notification',
    //   message: 'Local notification',
    // });
    PushNotification.localNotificationSchedule({
      channelId: 'local-notifications',
      title: 'SCHEDULED NOTIFICATION',
      message: 'It is sheduled for real',
      date: new Date(Date.now() + 1 * 1000),
    });
  };

  useEffect(() => {
    SplashScreen.hide();
    triggerNotificationHandler();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={COLORS.primary} />
      <PlacesStackNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
