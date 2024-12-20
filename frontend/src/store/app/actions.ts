import {Dispatch} from "redux";
import {appStore} from "@/store/app/slice";

export const setLoadingState = (is_loading: boolean) => async(dispatch: Dispatch) =>
    dispatch(appStore({ loading: is_loading }))

