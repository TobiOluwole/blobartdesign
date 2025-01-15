import {useAppSelector} from "@/store";

export default function TextSection({texts}){

    const language = useAppSelector((state) => state.web.lang);
    function processRichText(html) {
        const div = document.createElement('div');

        div.innerHTML = html;

        // Example: Add Tailwind classes to headers
        div.querySelectorAll('h1').forEach((el) => {
            el.classList.add('h1', 'font-normal', 'tracking-[10px]');
        });
        div.querySelectorAll('h2').forEach((el) => {
            el.classList.add('h2', 'font-normal', 'tracking-[10px]');
        });
        div.querySelectorAll('h3').forEach((el) => {
            el.classList.add('h3', 'font-normal', 'tracking-[10px]');
        });
        div.querySelectorAll('p').forEach((el) => {
            el.classList.add('text-base');
        });

        return div.innerHTML;
    }

    return (
        <>

                <style>
                    {`
                        h1{
                            font-size:40px;
                            color: black;
                        }
                        h2{
                            font-size:40px;
                            color: black;
                        }
                    `}
                </style>

            <div className=" flex justify-center items-center w-full mt-1 pb-5 max-w-[1140px] m-auto">
                <div
                    className={"m-3 leading-none text-[16px] text-[#777777] tracking-[.5px] "}
                    // className={"text-black prose mx-16 sm:mx-6 lg:mx-52 w-full ring-2"}

                    dangerouslySetInnerHTML={{__html: processRichText(language == 'en' ? texts.text_en : texts.text_tr)}}
                />

            </div>
        </>
    )
}