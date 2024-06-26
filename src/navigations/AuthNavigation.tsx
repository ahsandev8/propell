import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants/ScreenName';
import LoginScreen from '../components/AuthenticationScreens/LoginScreen';
import SignupScreen from '../components/AuthenticationScreens/SignupScreen';
import ForgotPassword from '../components/AuthenticationScreens/ForgotPassword';
import Onboarding from '../components/AuthenticationScreens/onbordings/Onboarding';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={`${SCREENS.LOGIN}`} component={LoginScreen} />
      <Stack.Screen name={`${SCREENS.SIGNUP}`} component={SignupScreen} />
      <Stack.Screen
        name={`${SCREENS.FORGETPASSWORD}`}
        component={ForgotPassword}
      />
      <Stack.Screen name={`${SCREENS.ONBOARDING}`} component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
