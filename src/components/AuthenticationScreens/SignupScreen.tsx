import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {loginAuth, signupAuth} from '../../redux/slice/auth.slice';
import {useDispatch} from 'react-redux';
import {SCREENS} from '../../constants/ScreenName';

interface SignupProps {
  navigation: any;
}

const SignupScreen: React.FC<SignupProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [useremail, setUserEmail] = useState('');
  const dispatch = useDispatch();

  const handleSignup = () => {
    navigation.navigate(`${SCREENS.ONBOARDING}`);
    dispatch(signupAuth());
  };

  const handleGoogleLogin = () => {
    dispatch(signupAuth());
  };

  const handleAppleLogin = () => {
    dispatch(signupAuth());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <View>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleGoogleLogin()}>
          <Icon name="logo-google" size={25} color="#fff" />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => handleAppleLogin()}>
          <Icon name="logo-apple" size={25} color="#fff" />
          <Text style={styles.socialButtonText}>Login with Apple</Text>
        </TouchableOpacity>
      </View>
      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#808080"
        onChangeText={text => setUsername(text)}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#808080"
        onChangeText={text => setUserEmail(text)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      /> */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(`${SCREENS.LOGIN}`)}>
          <Text style={styles.loginLink}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333333',
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#333333',
  },
  loginLink: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3366CC',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  socialButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});
