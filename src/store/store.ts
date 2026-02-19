import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from "../features/results/resultsSlice";
import bookingReducer from "../features/booking/bookingSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        results: resultsReducer,
        booking: bookingReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;