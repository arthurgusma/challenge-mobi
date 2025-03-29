import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VehicleSearchState {
  brand: string;
  model: string;
  year: string;
}

const initialState: VehicleSearchState = {
  brand: '',
  model: '',
  year: '',
};

export const vehicleSearchSlice = createSlice({
  name: 'vehicleSearch',
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
      state.model = '';
      state.year = '';
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
      state.year = '';
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    resetState: (state) => {
      state.brand = '';
      state.model = '';
      state.year = '';
    },
  },
});

export const { setBrand, setModel, setYear, resetState } = vehicleSearchSlice.actions;

export default vehicleSearchSlice.reducer;
