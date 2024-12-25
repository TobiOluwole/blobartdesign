import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    loading: boolean;
    pages: {
        id: number;
        url: string;
        display_name: string;
        display_name_tr: string;
        page_id: number,
        is_home: number,
    }[];
}

export const initialState: IAppState = {
    loading: false,
    pages: []
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
