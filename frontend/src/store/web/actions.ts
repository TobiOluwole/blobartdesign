import {IWebState, webStore} from "@/store/web/slice";
import {setLoadingState} from "@/store/app/actions";
import axios from "@/utils/axiosInstance";
import {toast} from "react-hot-toast";

export const setHttpStatus = (status: IWebState["currentHttpStatus"]) => async(dispatch) =>
    dispatch(webStore({ currentHttpStatus: status }))


export const getPage = (name: string) => async(dispatch) => {

    dispatch(setLoadingState(true))

    await axios.get('/page/'+ name )
        .then((data) => {
            console.log('singlepage',data)
            dispatch(setHttpStatus(200))
            // dispatch(setPages())
        }).catch((e) => {
            console.log('singlepage error',e)
            dispatch(setHttpStatus(404))
        }).finally(() => {
            dispatch(setLoadingState(false))
        })
}


export const setPages = (pages: IWebState["pages"]) => async(dispatch) =>
    dispatch(webStore({ pages }))

export const getPages = () => async(dispatch) => {

    const toast = toast.loading("getting pages ...")

    await axios.get('/pages')
        .then((data) => {
            console.log('multipage', data)
            // dispatch(setPages())
        })
        .catch((e) => {
            console.log('multipage error',e)
            switch(e.status){
                case 401:
                    toast.error('please login again..');
                    break;
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
