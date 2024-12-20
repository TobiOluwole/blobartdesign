import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        email: string;
    } | null
}

const initialState: IAuthState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStore: (state: IAuthState, action: {payload: Partial<IAuthState>}) => {
            return {...state, ...action.payload};
        },
    },
});

export const { authStore} = authSlice.actions;

export const authReducer = authSlice.reducer;