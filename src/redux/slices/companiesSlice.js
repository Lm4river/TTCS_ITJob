import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    status: 'idle',
    companyList: [],
    topCompanyList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.companyList = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchTopCompanies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopCompanies.fulfilled, (state, action) => {
        state.topCompanyList = action.payload;
        state.status = 'idle';
      });
  },
});

const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const result = await axios('api/it-companies');
  return result.data;
});

const fetchTopCompanies = createAsyncThunk('companies/fetchTopCompanies', async () => {
  const result = await axios('api/top-companies');
  return result.data;
});

export default companiesSlice;
export { fetchCompanies, fetchTopCompanies };
