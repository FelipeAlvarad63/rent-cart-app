import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    location: string;
    pickupDate: string;
    returnDate: string;
}

const initialState: SearchState = {
    location: '',
    pickupDate: '',
    returnDate: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchCriteria: (state, action: PayloadAction<SearchState>) => {
            state.location = action.payload.location;
            state.pickupDate = action.payload.pickupDate;
            state.returnDate = action.payload.returnDate;
        },
    },
});

export const { setSearchCriteria } = searchSlice.actions;
export default searchSlice.reducer;
