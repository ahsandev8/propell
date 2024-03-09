import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const storedAuth = await AsyncStorage.getItem('auth');
      if (storedAuth) {
        setAuthState({isAuthenticated: true, isLoading: true});
      } else {
        setAuthState({isAuthenticated: false, isLoading: true});
      }
    };
    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    setAuthState({isAuthenticated: true, isLoading: true});
    await AsyncStorage.setItem('auth', 'true');
  };

  const logout = async () => {
    setAuthState({isAuthenticated: false, isLoading: true});
    await AsyncStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{...authState, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
