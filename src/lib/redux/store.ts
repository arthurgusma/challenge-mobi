import { configureStore } from '@reduxjs/toolkit';
import { fipeApi } from '@/services/apiFipe';

export const store = configureStore({
  reducer: {
    [fipeApi.reducerPath]: fipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(fipeApi.middleware),
});