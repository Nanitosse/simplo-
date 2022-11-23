import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseUrl } from '../../shared/baseUrl';
import { PARTNERS } from '../shared/partner';

export const fetchPartners = createAsyncThunk(
    'PARTNERS/fetchPartners',
    async () => {
        const response = await fetch( 'PARTNERS');
        return response.PARTNERS
    }
);

const partnersSlice = createSlice({
    name: 'partners',
    // initialState: { isLoading: true, errMess: null, partnersArray: [] },
    initialState:   {partnersArray:[]},
    reducers: {},
    extraReducers: {
        // [fetchPartners.pending]: (state) => {
        //     state.isLoading = true;
        // },
        [fetchPartners.fulfilled]: (state, action) => {
            // state.isLoading = false;
            // state.errMess = null;
            state.partnersArray = action.payload;
        },
        [fetchPartners.rejected]: (state, action) => {
            // state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const partnersReducer = partnersSlice.reducer;