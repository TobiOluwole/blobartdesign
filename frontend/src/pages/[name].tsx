import {useRouter} from "next/router";
import {useEffect} from "react";
import {getPage} from "@/store/web/actions";
import {useDispatch} from "react-redux";
import {UnknownAction} from "redux";
import WebFrame from "@/components/web/frame";

function DynamicPage () {
    const dispatch = useDispatch();
    const router = useRouter()
    const name = router.query.name as string || ''

    useEffect(() => {
        dispatch(getPage(name) as UnknownAction)
    }, [name]);


    return (
            <>
                {name}
            </>
    )

}

export default WebFrame(DynamicPage)
