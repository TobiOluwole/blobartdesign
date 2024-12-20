import {toast} from "react-hot-toast";
import axios from "@/utils/axiosInstance";
import {setLoadingState} from "@/store/app/actions";
import {authStore} from "@/store/auth/slice";
import {Dispatch} from "redux";

export const authenticateCurrentUser = (is_authenticated: boolean) => async(dispatch: Dispatch) =>
    dispatch(authStore({ isAuthenticated: is_authenticated }))

export const login = (formData: {email: string, password: string}) => async(dispatch) => {

    const submitToast = toast.loading('logging in..')

    dispatch(authenticateCurrentUser(false))

    await axios.post('/auth', formData)
        .then((data) => {
            toast.success('welcome..', {id: submitToast});
            dispatch(authenticateCurrentUser(true))
            localStorage.setItem("token", data.data.access_token);
            window.location.href = '/dashboard'
        })
        .catch((e) => {
            dispatch(authenticateCurrentUser(false))
            switch (e.status) {
                case 401:
                    toast.error('wrong details..', {id: submitToast});
                    break;
                case 422:
                    toast.error(e.response?.data?.message, {id: submitToast});
                    break;
                default:
                    toast.error('something went wrong.', {id: submitToast});
                    console.log('login error', e);
            }
        })
}

export const sendPasswordResetLink = (email: string) => async (dispatch) => {

    const submitToast = toast.loading('sending email..')

    axios.post('/auth/send-reset-link', {email})
        .then((data) => {
            toast.success('email sent..', {id: submitToast});
        })
        .catch((e) => {
            switch (e.status) {
                case 401:
                    toast.error('no user with that email found..', {id: submitToast});
                    break;
                case 409:
                    toast.error('email already sent..', {id: submitToast});
                    break;
                case 422:
                    toast.error(e.response?.data?.message, {id: submitToast});
                    break;
                default:
                    toast.error('something went wrong..', {id: submitToast});
                    console.log('login error', e);
            }
        })

}

export const logout = () => async (dispatch) => {
    const submitToast = toast.loading('logging out..')

    await axios.delete('/auth')
        .then((data) => {
            toast.success('good bye..', {id: submitToast});
            dispatch(authenticateCurrentUser(false))
            window.location.href = '/login'
        })
        .catch((e) => {
            console.log(e.status)
            switch(e.status){
                case 401:
                    toast.success('already logged out..', {id: submitToast});
                    window.location.href = '/login'
                    return
                default:
                    toast.error('something went wrong..', {id: submitToast});
                    console.log('logout error', e);
            }
        })
}

export const authenticate = () => async (dispatch) => {

    dispatch(setLoadingState(true))

    await axios.patch('/auth')
        .then((data) => {
            dispatch(authenticateCurrentUser(true))

            localStorage.setItem("token", data.data.access_token);
        }).catch((e) => {
            console.log(e)
            dispatch(authenticateCurrentUser(false))
            switch(e.status){
                case 401:
                    toast.error('please login again..');
                    logout();
                    break;
                default:
                    toast.error('something went wrong..');
                    console.log('login error', e);
            }
            window.location.href = "/login"
        }).finally(() => {
            console.log('ended')
            dispatch(setLoadingState(false))
        })
}

export const resetPassword = (token: string, formData: {password: string, password_confirmation: string}) => async(dispatch) => {

    const submitToast = toast.loading('attempting reset..')

    await axios.patch('/auth/reset-password/'+encodeURI(token), formData)
        .then((data) => {
            toast.success('success, please login..', {id: submitToast});
            window.location.href = '/login'
        })
        .catch((e) => {
            switch (e.status) {
                case 419:
                    toast.error('expired link, please request a new link..', {id: submitToast});
                    break;
                case 422:
                    toast.error(e.response?.data?.message, {id: submitToast});
                    break;
                default:
                    toast.error('something went wrong.', {id: submitToast});
                    console.log('login error', e);
            }
        })
}
