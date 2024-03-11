import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {useAuth} from '../../contextApi/AuthProvider';
import {useDispatch} from 'react-redux';
import {logoutAuth} from '../../redux/slice/auth.slice';

const ProfileScreen = () => {
  // const {logout} = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAuth());
  };
  return (
    <View>
      <Text style={styles.textcolor}>ProfileScreen</Text>
      <Pressable>
        <Text onPress={handleLogout}>Logout</Text>
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
