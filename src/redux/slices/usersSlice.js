import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    status: 'idle',
    userList: [],
    currentUserId: '',
  },
  reducers: {
    signIn: (state, action) => {
      state.currentUserId = action.payload;
    },
    signOut: (state) => {
      state.currentUserId = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.status = 'idle';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.userList.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        let currentUser = state.userList.find((user) => user.id === id);
        currentUser = { ...currentUser, ...action.payload };
        // only update data for currentUser as above does not update the state??
        const index = state.userList.findIndex((user) => user.id === id);
        state.userList[index] = currentUser;
      });
  },
});

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const result = await axios('api/users');
  return result.data;
});

const signUp = createAsyncThunk('users/signUp', async (newUser) => {
  const result = await axios.post('api/users', newUser);
  return result.data;
});

const updateUser = createAsyncThunk('users/updateUser', async (data) => {
  try {
    const result = await axios.post('api/update-users', data);
    return result.data;
  } catch (err) {
    return { id: data.id, [data.key]: data.payload };
  }
});

export default usersSlice;
export { fetchUsers, signUp, updateUser };
