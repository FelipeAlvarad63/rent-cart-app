import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../../lib/api';

interface BookingState {
    selectedVehicle: Vehicle | null;
}

const initialState: BookingState = {
    selectedVehicle: null,
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        selectVehicle: (state: BookingState, action: PayloadAction<Vehicle>) => {
            state.selectedVehicle = action.payload;
        },
        clearSelection: (state: BookingState) => {
            state.selectedVehicle = null;
        },
    },
});

export const { selectVehicle, clearSelection } = bookingSlice.actions;
export default bookingSlice.reducer;
