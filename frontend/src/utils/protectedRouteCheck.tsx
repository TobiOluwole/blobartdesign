import React, {useEffect, useState} from "react";
import PageLoader from "@/utils/loadingPage";
import {useAppSelector, useAppDispatch} from "@/store";
import {authenticate} from "@/store/auth/actions";
import {UnknownAction} from "redux";


export default function protectedRouteCheck(Component: any) {

    return function IsAuth(props: any) {

        const dispatch = useAppDispatch();
        const [isClient, setIsClient] = useState(false);
        const loading = useAppSelector((state) => state.app.loading)

        useEffect(() => {

            dispatch(authenticate() as UnknownAction)
            setIsClient(true);

        }, []);


        if (!isClient) return null;


        return loading == true ? <PageLoader /> : <Component {...props} />;
    };
}