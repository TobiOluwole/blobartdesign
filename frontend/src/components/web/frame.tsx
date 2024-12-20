import {useEffect, useState} from "react";
import {getPages} from "@/store/web/actions";
import {UnknownAction} from "redux";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import NotFound from "next/dist/client/components/not-found-error";

export default function WebFrame(Component: any) {

    return function webFrame(props: any){

        const dispatch = useDispatch();

        const [isClient, setIsClient] = useState(false);
        const currentHttpStatus = useAppSelector((state) => state.web.currentHttpStatus);

        useEffect(() => {
            dispatch(getPages() as UnknownAction)
            setIsClient(true);
        }, [dispatch]);

        if (!isClient) return null;

        return (
            <>
                {currentHttpStatus === 404 && <NotFound />}
                {currentHttpStatus === 200 && <Component {...props} />}
            </>
        );

    }

}