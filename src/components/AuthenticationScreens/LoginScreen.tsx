import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../contextApi/AuthProvider';
import {useDispatch} from 'react-redux';
import {loginAuth} from '../../redux/slice/auth.slice';

interface LoginProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const {login} = useAuth();

  const handleLogin = () => {
    dispatch(loginAuth());
  };

  const handleGoogleLogin = () => {
    dispatch(loginAuth());
  };

  const handleAppleLogin = () => {
    dispatch(loginAuth());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Input Email"
        placeholderTextColor="#808080"
        onChangeText={text => setUserEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerLink}>Register Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    // backgroundColor: 'red',
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
  forgotPasswordContainer: {
    marginBottom: 15,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#3366CC',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#333333',
  },
  registerLink: {
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
