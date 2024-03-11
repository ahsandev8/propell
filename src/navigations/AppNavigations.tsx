import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../constants/ScreenName';
import ProfileNavigation from './ProfileNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  const {auth} = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {/* {isLoading && ( */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {auth ? (
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
      {/* )} */}
    </NavigationContainer>
  );
};

export default AppNavigations;
