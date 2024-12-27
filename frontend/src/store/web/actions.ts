import {IWebState, webStore} from "@/store/web/slice";
import {setLoadingState} from "@/store/app/actions";
import axios from "@/utils/axiosInstance";
import {toast} from "react-hot-toast";

export const setHttpStatus = (status: IWebState["currentHttpStatus"]) => async(dispatch) =>
    dispatch(webStore({ currentHttpStatus: status }))

export const setPages = (pages: IWebState["pages"]) => async(dispatch) =>
    dispatch(webStore({ pages }))

export const setSocialsData  = (socials: IWebState["socials"]) => async(dispatch) =>
    dispatch(webStore({ socials }))

export const getPages = () => async(dispatch) => {

    // const toast = toast.loading("getting pages ...")

    await axios.get('/pages')
        .then((data) => {
            dispatch(setPages(data.data))
        })
        .catch((e) => {
            switch(e.status){
                default:
                    toast.error('something went wrong..');
                    console.log('login error', e);
            }
        })
        .finally(() => {
            dispatch(setLoadingState(false))
        })

    return
}

export const getSocials = () => async(dispatch) => {
    axios.get('/socials/')
        .then((data) => {
            dispatch(setSocialsData(data.data))
        }).catch((e) => {})
}
