import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuth} from '../../contextApi/AuthProvider';

const ProfileScreen = () => {
  const {logout} = useAuth();
  return (
    <View>
      <Text style={styles.textcolor}>ProfileScreen</Text>
      <Pressable>
        <Text onPress={logout}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  textcolor: {
    color: 'black',
  },
});
