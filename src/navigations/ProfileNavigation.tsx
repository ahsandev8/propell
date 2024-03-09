import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/ScreenName';
import ProfileScreen from '../components/ProfileScreens/ProfileScreen';
import BottomTabProfile from './BottomTabProfile';

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={`${SCREENS.BOTTOMROOT}`}
        component={BottomTabProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
