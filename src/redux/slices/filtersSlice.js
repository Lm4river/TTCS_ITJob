import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    searchTextError: false,
    location: 'Tất cả thành phố',
    levelsFilter: [],
    salaryRangesFilter: [],
    companyTypesFilter: [],
  },
  reducers: {
    // search text
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    searchTextErrorChange: (state, action) => {
      state.searchTextError = action.payload;
    },

    // search location
    locationFilterChange: (state, action) => {
      state.location = action.payload;
    },

    // level
    levelsFilterChange: (state, action) => {
      state.levelsFilter = action.payload;
    },

    // salary range
    salaryRangesFilterChange: (state, action) => {
      state.salaryRangesFilter = action.payload;
    },

    // company type
    companyTypesFilterChange: (state, action) => {
      state.companyTypesFilter = action.payload;
    },

    // reset all filters
    resetFilters: (state) => {
      state.levelsFilter = [];
      state.salaryRangesFilter = [];
      state.companyTypesFilter = [];
    },
  },
});

export default filtersSlice;
