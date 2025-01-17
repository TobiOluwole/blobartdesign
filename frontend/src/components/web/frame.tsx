import {useEffect, useState} from "react";
import {getPages, getSocials, switchLanguage} from "@/store/web/actions";
import {UnknownAction} from "redux";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import NotFound from "next/dist/client/components/not-found-error";
import Link from "next/link";
import Footer from "@/components/web/footer";
import LangConv from "@/components/web/langConv";
import ScrollToTopButton from "@/components/web/scrollToTop";

export default function WebFrame(Component: any) {

    return function webFrame(props: any){
        const dispatch = useDispatch();
        const [isClient, setIsClient] = useState(false);
        useEffect(() => {
            setIsClient(true);
        }, [dispatch]);

        const [isNavOpen, setIsNavOpen] = useState(false);
        const [isAtTop, setIsAtTop] = useState(true);
        const [searchString, setSearchString] = useState('');


        const currentHttpStatus = useAppSelector((state) => state.web.currentHttpStatus);
        const pages = useAppSelector((state) => state.web.pages);
        const language = useAppSelector((state) => state.web.lang);


        const [isSearchModalOpen, setSearchModalOpen] = useState(false);

        const openSearchModal = () => setSearchModalOpen(true);
        const closeSearchModal = () => setSearchModalOpen(false);

        useEffect(() => {
            dispatch(getPages() as unknown as UnknownAction)
            dispatch(getSocials() as unknown as UnknownAction)
        }, [dispatch]);

        useEffect(() => {
            const handleScroll = () => {
                setIsAtTop(window.scrollY === 0);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


        useEffect(() => {

            const applyStyles = () => {
                // Check if the parent has the class 'pace-running'
                const paceRunningParent = document.querySelector("body");
                paceRunningParent.style.backgroundColor = "white"
                if (paceRunningParent) {
                    // Select all child elements except those with the class 'pace'
                    const elements = paceRunningParent.querySelectorAll(":scope > :not(.pace)");
                    elements.forEach(element => {
                        element.style.backgroundColor = "white";
                        element.style.opacity = "0";
                        // element.style.transition = "opacity 1s, background-color 0s"; // Add smooth transition
                    });
                }
            };

            applyStyles();

            const runningClasses = document.querySelectorAll('.pace-done');

            runningClasses.forEach(element => {
                element.classList.remove('pace-running');
            });

            // Dynamically load Pace.js
            const paceScript = document.createElement("script");
            paceScript.src = "https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js";
            paceScript.async = true;
            paceScript.setAttribute(
                "data-pace-options",
                JSON.stringify({
                    ajax: { ignoreURLs: ['recaptchaVerify'] }
                })
            );
            document.body.appendChild(paceScript);

            // Handle when Pace is done
            paceScript.onload = () => {
                if (window.Pace) {

                    window.Pace.on("done", () => {

                        setTimeout(() => {

                            const paceRunningParent = document.querySelector("body");
                            if (paceRunningParent) {
                                // Select all child elements except those with the class 'pace'
                                const elements = paceRunningParent.querySelectorAll(":scope > :not(.pace)");
                                elements.forEach(element => {
                                    element.style.backgroundColor = "white";
                                    element.style.opacity = "1";
                                    element.style.transition = "opacity 1.5s, background-color 1.5s"; // Reset the transition
                                });
                            }

                        }, 500); // Add delay before hiding the loader
                    });

                }
            };

            return () => {
                document.body.removeChild(paceScript); // Cleanup the script
            };
        }, []);

        if (!isClient) return null;
        return (
            <>
                {currentHttpStatus === 404 && <div className={"bg-black"}><NotFound/></div>}
                {
                    currentHttpStatus === 200 &&
                    <>
                        <ScrollToTopButton></ScrollToTopButton>
                        <nav id={'pageNav'}
                             className={`flex flex-wrap lg:flex-nowrap sm:h-36 h-16 pr-5 md:pr-36 w-full fixed top-0 items-center justify-center transition-all duration-500 z-50  ${isAtTop ? 'bg-transparent text-white' : 'bg-white text-black shadow-lg'}`}>
                            <Link href="/" className={`flex-none ml-5 p-[15px] h-full ${isAtTop ? '' : 'invert'}`}>
                                <img src="/img/logo.png" alt="logo" className="h-full"/>
                            </Link>
                            <div className="flex-grow"></div>
                            {
                                pages.map((page: any, index) => {
                                    return (
                                        <a href={`/${page.url}`} key={index}
                                           className="hidden lg:block px-3 flex-shrink mx-1.5 text-base hover:text-[#58585a] transition-all duration-350 tracking-navNormal">
                                            <LangConv en={page.display_name} tr={page.display_name_tr}/>
                                        </a>
                                    )
                                })
                            }
                            <a href="/bize-ulasin"
                               className="hidden lg:block px-3 flex-shrink mx-1.5 text-base hover:text-[#58585a] transition-all duration-350 tracking-navNormal">
                                <LangConv en={'CONTACT US'} tr={'BİZE ULAŞIN'}/>
                            </a>
                            <span onClick={() => {
                                dispatch(switchLanguage() as unknown as UnknownAction)
                            }} className="cursor-pointer hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">
                                <LangConv en={'TR'} tr={'EN'}/>
                            </span>
                            <button onClick={openSearchModal}>
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
                                    pages.map((page: any, index) => {
                                        return (
                                            <li className="py-3" key={index}>
                                                <a className={"text-black !filter-none"}
                                                   href={`/${page.url}`}>
                                                    <LangConv en={page.display_name} tr={page.display_name_tr}/>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                                <li className="py-3">
                                    <a className={"text-black  !filter-none"} href="/bize-ulasin">
                                        <LangConv en={'CONTACT US'} tr={'BİZE ULAŞIN'}/>
                                    </a>
                                </li>
                                <li className="py-3">
                                    <span className={"text-black  !filter-none cursor-pointer"} onClick={() => {
                                        dispatch(switchLanguage() as unknown as UnknownAction)
                                    }}>
                                        <LangConv en={'TR'} tr={'EN'}/>
                                    </span>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        openSearchModal();
                                        setIsNavOpen(!isNavOpen)
                                    }} className={"text-black !filter-none cursor-pointer"}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 512 512" className="h-4 fill-black block">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <div
                            className="min-h-screen bg-transparent content-wrapper relative">
                            <section className="content-lines-wrapper absolute pointer-events-none">
                                <div className="content-lines-inner">
                                    <div className="content-lines"></div>
                                </div>
                            </section>
                            <div className={"relative"}>
                                <Component {...props}/>
                                <Footer/>
                            </div>
                        </div>
                        <div>
                            <div className="relative z-50" aria-labelledby="modal-title" role="dialog"
                                 aria-modal="true" onClick={closeSearchModal}>
                                {/*{!--*/}
                                {/*    Background backdrop, show/hide based on modal state.*/}

                                {/*    Entering: "ease-out duration-300"*/}
                                {/*    From: "opacity-0"*/}
                                {/*    To: "opacity-100"*/}
                                {/*    Leaving: "ease-in duration-200"*/}
                                {/*    From: "opacity-100"*/}
                                {/*    To: "opacity-0"*/}
                                {/*    --}*/}
                                <div
                                    className={`fixed inset-0 bg-gray-500/75 transition-opacity ${isSearchModalOpen ? ' opacity-100 ease-out duration-300 w-full' : 'ease-in duration-200 opacity-0 w-0'}`}
                                    aria-hidden="true"></div>

                                <div
                                    className={`fixed inset-0 z-50 overflow-y-auto ${isSearchModalOpen ? ' w-screen' : ' w-0'}`}>
                                    <div
                                        className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                        {/*!--
                                            Modal panel, show/hide based on modal state.

                                            Entering: "ease-out duration-300"
                                            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            To: "opacity-100 translate-y-0 sm:scale-100"
                                            Leaving: "ease-in duration-200"
                                            From: "opacity-100 translate-y-0 sm:scale-100"
                                            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            --*/}
                                        <div onClick={(e) => {
                                            e.stopPropagation()
                                        }}
                                             className={`z-50 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${isSearchModalOpen ? ' ease-out duration-300 opacity-100 translate-y-0 sm:scale-100' : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`}>
                                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                    <span
                                                        className={"float-right zoomIn text-base font-semibold text-gray-900 cursor-pointer"}
                                                        onClick={closeSearchModal}>x</span>
                                                    <h3 className="text-base font-semibold text-gray-900 mb-5"
                                                        id="modal-title">
                                                        <LangConv tr={'Proje Ara'} en={"Project Search"}/>
                                                    </h3>
                                                    <hr/>
                                                    <div className="mt-2">
                                                        <input type="search"
                                                               className="w-full p-3 border rounded text-black"
                                                               name="search" value={searchString} onChange={(e) => {
                                                            setSearchString(e.target.value)
                                                        }}
                                                               placeholder={language == 'en' ? 'Type the project you want to search here' : 'Aramak istediğiniz projeyi buraya yazın'}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <a href={`/projeler?s=${searchString}`} onClick={closeSearchModal}
                                                   className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">
                                                    <LangConv tr={'Ara'} en={"Search"}/>
                                                </a>
                                                <button onClick={closeSearchModal} type="button"
                                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                                    <LangConv en={"close"} tr={'kapat'}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </>
        );

    }

}