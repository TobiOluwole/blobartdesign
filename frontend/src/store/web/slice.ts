import { createSlice } from "@reduxjs/toolkit";

export interface IWebState {
    lang: 'tr' | 'en';
    currentHttpStatus: 200 | 404;
    loading: boolean;
    pages: {}[];
    socials:{
        phone: string;
        email: string;
        address: string;
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        location_link: string;
    }
}

export const initialState: IWebState = {
    lang: "tr",
    currentHttpStatus: 200,
    loading: false,
    pages: [],
    socials:{
        phone: "",
        email: "",
        address: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        location_link: '',
    }
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
