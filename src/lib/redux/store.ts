import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { fipeApi } from '@/services/apiFipe';
import vehicleSearchReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [fipeApi.reducerPath]: fipeApi.reducer,
  vehicleSearch: vehicleSearchReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['vehicleSearch'],
  blacklist: [fipeApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(fipeApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
