import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from '../features/userSlice'
import thunk from 'redux-thunk';
import uiSlice from '../features/ui-slice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
   
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)