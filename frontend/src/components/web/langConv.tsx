import {useAppSelector} from "@/store";

export default function LangConv({en, tr}){
    const language = useAppSelector((state) => state.web.lang);

    return(
        <>
            {
                language == 'en' ? en : tr
            }
        </>
    )
}