import WebFrame from "@/components/web/frame";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "@/utils/axiosInstance";
import {setHttpStatus} from "@/store/web/actions";
import {UnknownAction} from "redux";
import {setLoadingState} from "@/store/app/actions";
import Banner from "@/components/web/banner";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Parallax} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "next/head";
import {useAppSelector} from "@/store";

function GalleryView(){
    const dispatch = useDispatch();
    const router = useRouter()
    const sectionId = router.query.data?.[0]
    const galleryName = router.query.data?.[1]
    const [imageList, setImageList] = useState([])

    const language = useAppSelector((state) => state.web.lang);

    function getImageList(){
        axios.get('/sections/gallery/'+ sectionId +'/' + galleryName )
            .then((data) => {
                setImageList(data.data)
                dispatch(setHttpStatus(200) as unknown as UnknownAction)
            }).catch((e) => {
            dispatch(setHttpStatus(404) as unknown as UnknownAction)
        }).finally(() => {
            dispatch(setLoadingState(false) as unknown as UnknownAction)
        })
    }

    useEffect(() => {
        if (sectionId && galleryName) {
            getImageList()
        }
    }, [sectionId, galleryName]);


    return (
        <>
            <Head>
                <title>{`BLOB ART & DESIGN | ${language == 'en' ? 'CONTACT US' : 'Bİze Ulaşın'.toUpperCase()}`}</title>
            </Head>
            <Banner image={'/img/banner.jpg'} isTop={true} isImageForced={true}/>
            {
                imageList.length > 0 &&
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.nextCarBut',
                        prevEl: '.prevCarBut'
                    }}
                    observer={true}
                    observeParents={true}
                    className="mySwiper w-[72%] max-w-[1140px] m-auto -mt-36 z-40 relative"
                >
                    <>
                        {
                            imageList.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="min-h-full min-w-full h-full object-cover bg-black m-auto"
                                            src={process.env.BACKEND_URL + image}
                                            alt={`Image ${index + 1} of ${galleryName}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </>
                    <div className="absolute bottom-[3%] left-[12%] flex z-50">
                        <div
                            className="prevCarBut cursor-pointer p-3  rounded-full border-red border">
                            <svg version="1.1" viewBox="0 0 17 17" className="fill-white h-3.5 w-3.5">
                                <path
                                    d="M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z" />
                            </svg>
                        </div>


                        <div
                            className="nextCarBut cursor-pointer p-3 rounded-full border-red border ml-[6px]">
                            <svg version="1.1" viewBox="0 0 17 17" className="fill-white h-3.5 w-3.5 ">
                                <path
                                    d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z" />
                            </svg>
                        </div>
                    </div>


                </Swiper>
            }


        </>
    )
}

export default WebFrame(GalleryView)