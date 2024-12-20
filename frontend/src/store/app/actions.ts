import {Dispatch} from "redux";
import {appStore, IAppState} from "@/store/app/slice";
import axios from "@/utils/axiosInstance";
import {toast} from "react-hot-toast";

export const setLoadingState = (is_loading: boolean) => async(dispatch: Dispatch) =>
    dispatch(appStore({ loading: is_loading }))

export const setPages = (pages: IAppState["pages"]) => async(dispatch: Dispatch) =>
    dispatch(appStore({ pages }))

export const getPages = () => async(dispatch) => {

    const getToast = toast.loading("getting pages ...")

    await axios.get('/pages')
        .then((data) => {
            toast.success("gotten pages ...", {id: getToast})
            dispatch(setPages(data.data))
        })
        .catch((e) => {
            toast.error("couldn't get pages ...", {id: getToast})
            switch(e.status){
                default:
                    toast.error('something went wrong..');
                    console.log('login error', e);
            }
        })
}

