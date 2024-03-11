import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigations from './src/navigations/AppNavigations';
import {ReduxProvider} from './src/redux/ReduxProvider';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReduxProvider>
        <AppNavigations />
      </ReduxProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
