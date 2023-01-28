import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface featuresState {
    displayFeatures: 'ImpExScript' | 'ReduxExample';
}

const initialState: featuresState = {
    displayFeatures: 'ImpExScript',
};

export const featuresSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        changeFeatures: (state, action) => {
            state.displayFeatures = action.payload;
        }
    }
});

export const { changeFeatures } = featuresSlice.actions;
export const selectDisplayFeatures = (state : RootState) => state.features.displayFeatures;
export default featuresSlice.reducer;