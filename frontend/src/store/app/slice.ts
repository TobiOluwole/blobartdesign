import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    loading: boolean;
}

export const initialState: IAppState = {
    loading: false
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        appStore: (state: IAppState, action:{payload:Partial<IAppState>}) => {
            return {...state, ...action.payload};
        },
    }
});

export const { appStore } = appSlice.actions;

export const appReducer = appSlice.reducer;
