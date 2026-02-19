import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Vehicle, searchVehicles } from "../../services/api";

interface ResultsState {
    vehicles: Vehicle[];
    loading: boolean;
    error: string | null;
}

const initialState: ResultsState = {
    vehicles: [],
    loading: false,
    error: null,
};

export const fetchVehicles = createAsyncThunk(
    "results/fetchVehicles",
    async () => {
        const response = await searchVehicles();
        return response;
    }
);

export const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVehicles.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.loading = false;
                state.vehicles = action.payload;
            })
            .addCase(fetchVehicles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error al buscar vehículos";
            });
    },
});

export default resultsSlice.reducer;