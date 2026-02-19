import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        "test": () => "Hola mundo"
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;