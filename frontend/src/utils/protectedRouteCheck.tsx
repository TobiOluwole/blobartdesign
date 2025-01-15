"use client"

import React, {useEffect, useState} from "react";
import PageLoader from "@/utils/loadingPage";
import {useAppSelector, useAppDispatch} from "@/store";
import {authenticate} from "@/store/auth/actions";
import {UnknownAction} from "redux";
import Head from "next/head";


export default function protectedRouteCheck(Component: any) {

    return function IsAuth(props: any) {

        const dispatch = useAppDispatch();
        const [isClient, setIsClient] = useState(false);
        const loading = useAppSelector((state) => state.app.loading)

        useEffect(() => {

            dispatch(authenticate() as unknown as UnknownAction)
            setIsClient(true);

        }, []);


        if (!isClient) return null;


        return loading == true ?
            <>
                <Head>
                    <title>{`BLOB ART & DESIGN ADMIN`}</title>
                </Head>
                <PageLoader />
            </> :
            <>
                <Head>
                    <title>{`BLOB ART & DESIGN ADMIN`}</title>
                </Head>
                <Component {...props} />
            </>;
    };
}