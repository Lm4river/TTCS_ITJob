import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    status: 'idle',
    jobList: [],
    selectedJob: {},
  },
  reducers: {
    selectJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobList = action.payload;
        state.selectedJob = action.payload[0];
        state.status = 'idle';
      });
  },
});

const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const result = await axios('api/it-jobs');
  return result.data;
});

export default jobsSlice;
export { fetchJobs };
