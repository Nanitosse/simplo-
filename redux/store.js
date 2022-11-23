import { configureStore } from '@reduxjs/toolkit';
// import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { fieldsReducer } from '../features/fields/fieldsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
// import { partnersReducer } from '../features/partners/partnersSlice';
// import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        fields: fieldsReducer,
        comments: commentsReducer,
         PARTNERS : partnersReducer,
        // promotions: promotionsReducer
    }
});