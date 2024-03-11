import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    onboarding: {
      email: false,
    },
  },
  reducers: {
    loginAuth: state => {
      state.auth = true;
    },
    signupAuth: state => {
      state.onboarding.email = true;
    },
    logoutAuth: state => {
      state.auth = false;
    },
  },
});

export const {loginAuth, logoutAuth, signupAuth} = authSlice.actions;

export default authSlice.reducer;
