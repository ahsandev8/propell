import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../slice/auth.slice';

export const rootReducer = combineReducers({
  auth: authSlice,
});
