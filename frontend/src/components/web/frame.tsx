import {useEffect, useState} from "react";
import {getPages, getSocials, switchLanguage} from "@/store/web/actions";
import {UnknownAction} from "redux";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import NotFound from "next/dist/client/components/not-found-error";
import Link from "next/link";
import Footer from "@/components/web/footer";
import LangConv from "@/components/web/langConv";

export default function WebFrame(Component: any) {

    return function webFrame(props: any){
        const dispatch = useDispatch();
        const [isClient, setIsClient] = useState(false);
        useEffect(() => {
            setIsClient(true);
        }, [dispatch]);

        const [isNavOpen, setIsNavOpen] = useState(false);
        const [isAtTop, setIsAtTop] = useState(true);


        const currentHttpStatus = useAppSelector((state) => state.web.currentHttpStatus);
        const pages = useAppSelector((state) => state.web.pages);

        useEffect(() => {
            dispatch(getPages() as UnknownAction)
            dispatch(getSocials() as UnknownAction)
        }, [dispatch]);

        useEffect(() => {
            const handleScroll = () => {
                setIsAtTop(window.scrollY === 0);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        if (!isClient) return null;
        return (
            <>
                {currentHttpStatus === 404 && <NotFound/>}
                {
                    currentHttpStatus === 200 &&
                    <>
                        <nav id={'pageNav'} className={`flex flex-wrap lg:flex-nowrap sm:h-36 h-16 pr-5 md:pr-36 w-full fixed top-0 items-center justify-center transition-all duration-500 z-50 uppercase  ${isAtTop ? 'bg-transparent text-white' : 'bg-white text-black shadow-lg'}`}>
                            <Link href="/" className={`flex-none ml-5 p-[15px] h-full ${isAtTop ? '' : 'invert'}`}>
                                <img src="/img/logo.png" alt="logo" className="h-full"/>
                            </Link>
                            <div className="flex-grow"></div>
                            {
                                pages.map((page) => {
                                    return (
                                            <Link href={`/${page.url}`} className="hidden lg:block px-3 flex-shrink mx-1.5 text-base hover:text-[#58585a] transition-all duration-350 tracking-navNormal">
                                                <LangConv en={page.display_name} tr={page.display_name_tr} />
                                            </Link>
                                        )
                                })
                            }
                            <Link href="/bize-ulasin" className="hidden lg:block px-3 flex-shrink mx-1.5 text-base hover:text-[#58585a] transition-all duration-350 tracking-navNormal">
                                <LangConv en={'contact us'} tr={'bize ulaşın'} />
                            </Link>
                            <span onClick={()=>{dispatch(switchLanguage() as UnknownAction)}} className="cursor-pointer hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">
                                <LangConv en={'TR'} tr={'EN'} />
                            </span>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512" className="h-4 fill-current px-3 hidden lg:block">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </button>
                            <button className="flex-none lg:hidden block" onClick={() => {
                                setIsNavOpen(!isNavOpen)
                            }}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"
                                     fill="#58585a"
                                     className="fill-[#58585a] h-6">
                                    <g>
                                    </g>
                                    <path d="M17 6v1h-17v-1h17zM0 10h17v-1h-17v1z"/>
                                </svg>
                            </button>
                            <ul
                                className={`bg-white text-black flex flex-col flex-grow w-screen md:w-full transition-height ease-in-out duration-500 overflow-y-scroll lg:hidden ${isNavOpen ? ' h-80 p-5' : ' h-0'}`}
                            >
                                {
                                    pages.map((page) => {
                                        return (
                                            <li className="py-3">
                                                <Link className={"text-black !filter-none"}
                                                      href={`/${page.url}`}>
                                                    <LangConv en={page.display_name} tr={page.display_name_tr}/>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li className="py-3">
                                    <Link className={"text-black  !filter-none"} href="/bize-ulasin">
                                        <LangConv en={'contact us'} tr={'bize ulaşın'}/>
                                    </Link>
                                </li>
                                <li className="py-3">
                                    <span className={"text-black  !filter-none cursor-pointer"} onClick={() => {
                                        dispatch(switchLanguage() as UnknownAction)
                                    }}>
                                        <LangConv en={'TR'} tr={'EN'}/>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className="min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:360px_100%] [background-position-x:-180px]">
                            <Component {...props} />
                        </div>
                        <Footer />
                    </>
                }
            </>
        );

    }

}