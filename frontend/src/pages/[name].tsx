import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {setHttpStatus} from "@/store/web/actions";
import {useDispatch} from "react-redux";
import {UnknownAction} from "redux";
import WebFrame from "@/components/web/frame";
import axios from "@/utils/axiosInstance";
import {setLoadingState} from "@/store/app/actions";
import Hero from "@/components/web/hero";
import Banner from "@/components/web/banner";
import TextSection from "@/components/web/textSection";
import Gallery from "@/components/web/gallery";
import Team from "@/components/web/team";

function DynamicPage () {
    const dispatch = useDispatch();
    const router = useRouter()
    const name = router.query.name as string || ''
    const [pageInfo, setPageInfo] = useState({sections: [{sort_id: 0}]})
    const [loadPercentage, setLoadPercentage] = useState(0);

    function getPageInfo(name){
        axios.get('/page/'+ name )
            .then((data) => {
                setPageInfo(data.data)
                dispatch(setHttpStatus(200) as UnknownAction)
            }).catch((e) => {
                dispatch(setHttpStatus(404) as UnknownAction)
            }).finally(() => {
                dispatch(setLoadingState(false) as UnknownAction)
            })
    }

    useEffect(() => {
        const simulateLoading = () => {
            let percentage = 0;
            const interval = setInterval(() => {
                if (percentage >= 100) {
                    clearInterval(interval);
                    console.log("Loading complete!");
                } else {
                    percentage += 5; // Increment progress
                    setLoadPercentage(percentage);
                }
            }, 100); // Simulate loading in intervals
        };

        simulateLoading();
    }, []);

    useEffect(() => {
        getPageInfo(name)
    }, [name]);


    return (
        <>
            {
                pageInfo.sections.map((section, index) => {
                    return (
                        (section.type == 'hero' && <Hero key={index} idx={section.id} slides={section.content} includeSocials={section.sort_id == 0}/>) ||
                        (section.type == 'banner' && <Banner key={index} image={section.content?.image} isTop={section.sort_id == 0}/>) ||
                        (section.type == 'text' && <TextSection key={index} texts={section.content}/>) ||
                        (section.type == 'gallery' && <Gallery key={index} data={section.content} sectionId={section.id}/>) ||
                        (section.type == 'team' && <Team key={index} data={section.content} />)
                    )
                })
            }
        </>
    )
}

export default WebFrame(DynamicPage)
