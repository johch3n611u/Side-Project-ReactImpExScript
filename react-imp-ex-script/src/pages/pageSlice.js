import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayPage: 'ImpExScript',
};

export const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.displayPage = action.payload;
        }
    }
});

export const { changePage } = pageSlice.actions;
export const selectDisplayPage = (state) => state.pages.displayPage;
export default pageSlice.reducer;