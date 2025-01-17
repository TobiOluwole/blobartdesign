import { authReducer } from "@/store/auth/slice";
import { appReducer } from "@/store/app/slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import {webReducer} from "@/store/web/slice";

const authPersistConfig = {
    key: "auth",
    storage: storage,
    whitelist: ["jwtToken"],
};
const appPersistConfig = {
    key: "app",
    storage: storage,
};
const webPersistConfig = {
    key: "web",
    storage: storage,
    blacklist: ['currentHttpStatus']
};

export default combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    web: persistReducer(webPersistConfig, webReducer),
});