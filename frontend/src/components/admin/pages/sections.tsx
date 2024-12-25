import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "@/utils/axiosInstance";
import HeroSection from "@/components/admin/sections/hero";

export default function Sections(){
    const router = useRouter()
    const pageId = router.query.id as string || ''

    const [sections, setSections] = useState([])

    const heroBoilerPlate = {
        type: 'hero',
        page_id: pageId,
        content:[
            {
                image: '',
                text: ''
            }
        ]
    }

    function saveSections(){
        const loading = toast.loading('saving page sections ..')
        axios.put('sections/'+pageId, sections)
            .then((data) => {
                toast.success('page sections saved..', {id: loading})
                getAllSections()
            })
            .catch((e) => {
                toast.error('error saving page sections..', {id: loading})
                console.log(e)
            })
    }

    function getAllSections(){
        const loading = toast.loading('getting page sections ..')
        axios.get('sections/'+pageId)
            .then((data) => {
                toast.success('page sections gotten..', {id: loading})
                setSections(data.data)
            })
            .catch((e) => {
                toast.error('error getting page sections..', {id: loading})
                console.log(e)
            })
    }

    function updateSections(s){
        setSections(s)
    }

    useEffect(() => {
        getAllSections()
    }, [pageId]);


    return(
        <>
            <div className="space-y-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-5">
                {/*{JSON.stringify(sections)}*/}
                {
                    sections.map((section, index) =>
                        {
                            return (
                                section.type == 'hero' &&
                                <HeroSection key={index} idx={index} slides={section.content} allSections={sections} updateSections={updateSections} boiler={heroBoilerPlate} />
                            )
                        }
                    )
                }
                <hr />
                <button onClick={saveSections} className="bg-blue-500 p-3 rounded">
                    Save
                </button>
            </div>
            <div className="space-x-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-5 flex">
                <button className="bg-purple-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...heroBoilerPlate}])
                    }
                }> Add Hero</button>
                <button className="bg-blue-500 p-3 rounded"> Add Text</button>
                <button className="bg-green-500 p-3 rounded"> Add Gallery</button>
                <button className="bg-yellow-500 p-3 rounded"> Add Team</button>
                <button className="bg-orange-500 p-3 rounded"> Add Contact Form</button>
            </div>
        </>
    )
}