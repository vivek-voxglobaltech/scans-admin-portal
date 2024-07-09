import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import userReducer from './features/user/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({ todoReducer, userReducer });

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
