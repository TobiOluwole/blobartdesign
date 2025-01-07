"use client"
import WebFrame from "@/components/web/frame";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {EffectFade, Autoplay, Navigation} from "swiper/modules";
import {useState} from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import LangConv from "@/components/web/langConv";

export default function Hero({idx, slides, includeSocials = false}){

    const socials = useSelector((state: RootState) => state.web.socials);

    const [altText, setAltText] = useState(<></>);
    const [textAnimation, setTextAnimation] = useState("");
    function changeText(swiper) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const img = activeSlide.querySelector("img"); // Find the image in the active slide
        if (img) {
            setTextAnimation("animate-fadeOut"); // Trigger fade-out animation
            setTimeout(() => {
                setAltText(<LangConv en={img.dataset.textEn} tr={img.dataset.textTr} />)
                setTextAnimation("animate-slideIn"); // Trigger slide-in animation
            }, 500); // Match fade-out duration
        }
    }
    return (
        <div key={idx} className="relative h-screen w-full p-0 m-0">
                <div
                    className={`absolute top-[50%] right-[12%] z-40 text-white p-2 rounded transition-all ease-in-out sm:text-2xl md:text-5xl text duration-500 w-[80vw] sm:w-[50vw]  ${textAnimation}`}
                >
                    <span className="float-end text-right tracking-headerWide -translate-y-2/4 w-full sm:leading-8 md:leading-[65px] break-words">{altText}</span>
                </div>

                <div className="absolute z-50 bottom-[2%] left-[12%] flex">
                    <div id={`prevCarBut${idx}`} className=" cursor-pointer p-3  rounded-full border-white border m-1 my-3">
                        <svg version="1.1" viewBox="0 0 17 17" className="fill-white h-3.5 w-3.5">
                            <path
                                d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"/>
                        </svg>
                    </div>

                    <div id={`nextCarBut${idx}`} className="cursor-pointer p-3 rounded-full border-white border m-1 my-3">
                        <svg version="1.1" viewBox="0 0 17 17" className="fill-white h-3.5 w-3.5 ">
                            <path
                                d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"/>
                        </svg>
                    </div>
                </div>

                <Swiper
                    autoplay={{
                        delay: 5000
                    }}
                    speed={1000}
                    effect={'fade'}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[EffectFade, Autoplay, Navigation]}
                    onSlideChange={(swiper) => {
                        changeText(swiper)
                    }}
                    navigation={{
                        nextEl: '#nextCarBut'+idx,
                        prevEl: '#prevCarBut'+idx
                    }}
                    className="mySwiper h-screen w-full"
                >
                    {
                        slides.map((slide) => {
                            return (
                                <SwiperSlide>
                                    <img className="min-h-full min-w-full h-full brightness-[.3] object-cover bg-black m-auto" src={process.env.BACKEND_URL + slide.image}
                                         data-text-en={slide.text_en} data-text-tr={slide.text_tr} alt={'image'}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <div
                    className="absolute top-0 right-0 m-12 border-t border-r h-16 w-16 z-50 border-white/20 hidden lg:block"></div>
                <div
                    className="absolute bottom-0 right-0 m-12 border-b border-r h-16 w-16 z-50 border-white/20 hidden lg:block"></div>


                {
                    includeSocials &&
                    <div className="left-panel">
                        <ul className="social-left clearfix">
                            <li>
                                <Link href={socials.linkedin ?? '/#'} className="grid place-content-center">
                                    <svg viewBox="0 0 17 17" className="h-4 w-4 m-auto">
                                        <path
                                            d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
                                            fill="#ffffff"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={socials.instagram ?? '/#'} className="grid place-content-center">
                                    <svg version="1.1" className="h-4 w-4 m-auto"
                                         viewBox="0 0 17 17">
                                        <path
                                            d="M13 0h-9c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4v-9c0-2.2-1.8-4-4-4zM16 13c0 1.654-1.346 3-3 3h-9c-1.654 0-3-1.346-3-3v-6h3.207c-0.286 0.61-0.457 1.283-0.457 2 0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-0.717-0.171-1.39-0.457-2h3.207v6zM12.25 9c0 2.068-1.682 3.75-3.75 3.75s-3.75-1.682-3.75-3.75 1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75zM12.152 6c-0.872-1.059-2.176-1.75-3.652-1.75s-2.78 0.691-3.652 1.75h-3.848v-2c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zM14.454 2.722v1.298c0 0.299-0.244 0.543-0.542 0.543h-1.368c-0.3-0.001-0.544-0.245-0.544-0.543v-1.298c0-0.299 0.244-0.543 0.544-0.543h1.368c0.298 0 0.542 0.244 0.542 0.543z"
                                            fill="#ffffff"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href={socials.twitter ?? '/#'} className="grid place-content-center">
                                    <svg viewBox="0 0 17 17" className="h-4 w-4 m-auto">
                                        <path
                                            d="M17 3.236c-0.626 0.27-1.305 0.464-2.007 0.539 0.723-0.431 1.273-1.11 1.532-1.919-0.669 0.399-1.424 0.69-2.211 0.841-0.636-0.68-1.542-1.1-2.545-1.1-1.931 0-3.484 1.564-3.484 3.483 0 0.27 0.033 0.54 0.086 0.799-2.891-0.15-5.469-1.531-7.184-3.646-0.302 0.517-0.475 1.111-0.475 1.759 0 1.208 0.615 2.275 1.553 2.901-0.571-0.022-1.111-0.184-1.575-0.442 0 0.010 0 0.032 0 0.043 0 1.692 1.197 3.095 2.794 3.419-0.291 0.075-0.604 0.118-0.917 0.118-0.226 0-0.442-0.021-0.657-0.054 0.442 1.381 1.726 2.384 3.257 2.417-1.198 0.938-2.697 1.488-4.326 1.488-0.291 0-0.561-0.010-0.841-0.042 1.543 0.992 3.376 1.564 5.351 1.564 6.407 0 9.913-5.307 9.913-9.912 0-0.152 0-0.302-0.010-0.454 0.678-0.496 1.271-1.112 1.746-1.802zM14.263 5.491c0 3.701-2.765 8.912-8.913 8.912-0.492 0-0.979-0.040-1.458-0.118 0.67-0.276 1.305-0.646 1.891-1.104 0.333-0.26 0.466-0.702 0.332-1.103-0.134-0.401-0.505-0.675-0.928-0.684-0.545-0.011-1.055-0.197-1.467-0.509 0.004-0.001 0.008-0.002 0.012-0.003 0.452-0.116 0.763-0.528 0.751-0.994-0.011-0.467-0.343-0.862-0.8-0.955-0.652-0.132-1.203-0.516-1.559-1.046 0.035 0.002 0.069 0.004 0.104 0.005 0.013 0 0.025 0 0.038 0 0.432 0 0.817-0.278 0.951-0.692 0.138-0.426-0.024-0.891-0.397-1.14-0.63-0.42-1.030-1.096-1.098-1.841 1.824 1.582 4.146 2.531 6.597 2.658 0.017 0.001 0.035 0.001 0.052 0.001 0.291 0 0.568-0.127 0.759-0.349 0.202-0.235 0.283-0.551 0.22-0.854-0.044-0.209-0.066-0.41-0.066-0.595 0-1.369 1.114-2.483 2.484-2.483 0.698 0 1.342 0.278 1.815 0.784 0.116 0.124 0.261 0.215 0.417 0.266-0.019 0.146-0.006 0.297 0.043 0.444 0.063 0.191 0.18 0.352 0.33 0.47-0.089 0.164-0.132 0.353-0.119 0.544 0.010 0.129 0.009 0.257 0.009 0.386z"
                                            fill="#ffffff"/>
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link href={socials.facebook ?? '/#'}
                                      className="grid place-content-center">
                                    <svg viewBox="0 0 17 17" className="h-4 w-4 m-auto">
                                        <path
                                            d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"
                                            fill="#ffffff"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
    )
}