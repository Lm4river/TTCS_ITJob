import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import headerSlice from './slices/headerSlice';
import jobsSlice from './slices/jobsSlice';
import companiesSlice from './slices/companiesSlice';
import filtersSlice from './slices/filtersSlice';
import usersSlice from './slices/usersSlice';

const reducers = combineReducers({
  header: headerSlice.reducer,
  jobs: jobsSlice.reducer,
  companies: companiesSlice.reducer,
  filters: filtersSlice.reducer,
  users: usersSlice.reducer,
});

const persistConfig = {
  key: 'main-root',
  storage,
  blacklist: ['filters'],
  // whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export default store;
export { persistor };
