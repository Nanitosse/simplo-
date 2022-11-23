import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseUrl } from '../../shared/baseUrl';
import { fields } from '../../shared/fieldsArray';

export const fetchFields = createAsyncThunk(
    'fields/fetchFields',
    async () => {
        // const response = await fetch(baseUrl + 'campsites');
        const response = await fetch(  'fields');
        // return response.json();
        return response.fields;
    }
);

const fieldsSlice = createSlice({
    name: 'fields',
    // initialState: { isLoading: true, errMess: null, fieldsArray: [] },
    initialState:{ fieldArray:[]},
    reducers:(state= initialState, action)=> {
        state.fieldArray= action.paylod

    },
    // extraReducers: {
    //     // [fetchFields.pending]: (state) => {
    //     //     state.isLoading = true;
    //     // },
    //     [fetchFields.fulfilled]: (state, action) => {
    //         // state.isLoading = false;
    //         // state.errMess = null;
    //         state.fieldArray = action.payload;
    //     },
    //     [fetchFields.rejected]: (state, action) => {
    //         // state.isLoading = false;
    //         state.errMess = action.error ? action.error.message : 'Fetch failed';
    //     }
    // }
});

export const fieldsReducer = fieldsSlice.reducer;