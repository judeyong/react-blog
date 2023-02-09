import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isloggedIn: false,
  loggedInEmail: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  
  reducers: {
    login: (state) => {
      localStorage.setItem('isLoggedIn', state.loggedInEmail);
      state.isloggedIn = true;
    },

    logout: (state) => {
      localStorage.removeItem('isLoggedIn');
      state.isloggedIn = false;
      state.loggedInEmail = '';
    },

    loggedEmail: (state, action) => {
      state.loggedInEmail = action.payload;
    },
  }
})

export const { login, logout, loggedEmail } = authSlice.actions;

export default authSlice.reducer;