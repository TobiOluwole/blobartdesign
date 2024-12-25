import {useEffect, useState} from "react";
import {getPages} from "@/store/web/actions";
import {UnknownAction} from "redux";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import NotFound from "next/dist/client/components/not-found-error";
import Link from "next/link";
import Footer from "@/components/web/footer";

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

        useEffect(() => {
            dispatch(getPages() as UnknownAction)
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
                        <nav className={`flex flex-wrap lg:flex-nowrap h-36 pr-5 md:pr-36 w-full fixed top-0 items-center justify-center transition-all duration-500 z-50  ${isAtTop ? 'bg-transparent text-white' : 'bg-white text-black'}`}>
                            <Link href="/" className={`flex-none ml-5 p-[15px] h-full ${isAtTop ? '' : 'invert'}`}>
                                <img src="/img/logo.png" alt="logo" className="h-full"/>
                            </Link>
                            <div className="flex-grow"></div>
                            <Link href="/" className="hidden lg:block px-3  mx-1.5 text-base tracking-navNormal">ANASAYFA</Link>
                            <Link href="/hakkimizda" className="hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">HAKKIMIZDA</Link>
                            <Link href="/projeler" className="hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">PROJELER</Link>
                            <Link href="/proje-ekibi" className="hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">PROJE EKİBİ</Link>
                            <Link href="/bize-ulasin" className="hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">BİZE ULAŞIN</Link>
                            <Link href="/en" className="hidden lg:block px-3 mx-1.5 text-base tracking-navNormal">EN</Link>
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
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                                <li className="py-3">
                                    <Link href="#">linnieflnkewfwe</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="min-h-screen">
                            <Component {...props} />
                        </div>
                        <Footer />
                    </>
                }
            </>
        );

    }

}