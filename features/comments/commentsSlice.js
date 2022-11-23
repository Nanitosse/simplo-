import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseUrl } from '../../shared/baseUrl';
import {comments} from  '../../shared/comment';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch( 'comments');
        // return response.json();
        return response.comments
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    // initialState: { isLoading: true, errMess: null, commentsArray: [] },
    initialState: {  commentsArray: [] },

    reducers: {},
    extraReducers: {
        // [fetchComments.pending]: (state) => {
        //     state.isLoading = true;
        // },
        [fetchComments.fulfilled]: (state, action) => {
            // state.isLoading = false;
            // state.errMess = null;
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            // state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const commentsReducer = commentsSlice.reducer;