import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from '../../../components/interceptor';
import { createUserAPI } from '../../../apiConst';

const initialState = {
  user: [],
};

export const registerUser = createAsyncThunk(
  'user/createUser',
  async (data) => {
    try {
      const response = await postRequest(`${createUserAPI}`, data);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const userData = {
        data: action.payload,
      };
      state.user.push(userData);
    },
  },
});

export const { createUser, setUser } = userSlice.actions;
export default userSlice.reducer;
