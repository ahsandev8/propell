import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../constants/ScreenName';
import ProfileScreen from '../components/ProfileScreens/ProfileScreen';
import SettingsScreen from '../components/ProfileScreens/SettingsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: string | undefined;

          if (route.name === SCREENS.PROFILE) {
            iconName = 'person-outline';
          } else if (route.name === SCREENS.SETTING) {
            iconName = 'settings-outline';
          }

          return <Ionicons name={iconName || ''} size={size} color={color} />;
        },
      })}
      tabBarOptions={
        {
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        } as BottomTabNavigationOptions
      }>
      <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={SCREENS.SETTING} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const BottomTabProfile: React.FC = () => {
  return <MyTabs />;
};

export default BottomTabProfile;
