import { createSlice } from "@reduxjs/toolkit";

export interface IWebState {
    currentHttpStatus: 200 | 404;
    loading: boolean;
    pages: {}[];
}

export const initialState: IWebState = {
    currentHttpStatus: 200,
    loading: false,
    pages: []
};

export const webSlice = createSlice({
    name: "web",
    initialState,
    reducers: {
        webStore: (state: IWebState, action:{payload:Partial<IWebState>}) => {
            return {...state, ...action.payload};
        },
    }
});

export const { webStore } = webSlice.actions;

export const webReducer = webSlice.reducer;
