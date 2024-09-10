import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthData, AuthResponse } from 'models/AuthI';

interface InitialState {
  user: string;
  isAuth: boolean;
  error: string | null;
}

export const authFetch = createAsyncThunk<AuthResponse, AuthData>(
  'usersSlice/authFetch',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://fdsfdsf-inky.vercel.app/login', {
        username,
        password,
      });
      console.log(response);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Возвращаем сообщение об ошибке через rejectWithValue
        return rejectWithValue(error.response.data.message);
      }
    }
  },
);

const initialState: InitialState = {
  isAuth: false,
  user: '',
  error: null,
};

export const authSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addProduct: (state, action: { payload: AuthData }) => {
      console.log(action.payload);
    },
    resetError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authFetch.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.isAuth = action.payload.data.isAuth;
    });
    builder.addCase(authFetch.rejected, (state, action) => {
      state.isAuth = false;
      state.user = '';
      state.error = action.payload as string; // Записываем сообщение об ошибке
    });
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, resetError, logout } = authSlice.actions;

export default authSlice.reducer;
