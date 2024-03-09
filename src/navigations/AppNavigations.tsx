import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../constants/ScreenName';
import ProfileNavigation from './ProfileNavigation';
import AuthNavigation from './AuthNavigation';
import {useAuth} from '../contextApi/AuthProvider';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  const {isAuthenticated, isLoading} = useAuth();

  return (
    <NavigationContainer>
      {isLoading && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isAuthenticated ? (
            <Stack.Screen
              name={`${SCREENS.ROOTPROFILE}`}
              component={ProfileNavigation}
            />
          ) : (
            <Stack.Screen
              name={`${SCREENS.ROOTAUTH}`}
              component={AuthNavigation}
            />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigations;
