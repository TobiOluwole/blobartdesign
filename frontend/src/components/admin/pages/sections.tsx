import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "@/utils/axiosInstance";
import HeroSection from "@/components/admin/sections/hero";
import BannerSection from "@/components/admin/sections/banner";
import TextSection from "@/components/admin/sections/text";

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
                text_en: '',
                text_tr: '',
            }
        ]
    }

    const bannerBoilerPlate = {
        type: 'banner',
        page_id: pageId,
        content: {
            image: ''
        }
    }

    const textBoilerPlate = {
        type: 'text',
        page_id: pageId,
        content: {
            text_en: '',
            text_tr: ''
        }
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

    function moveSectionUp(index) {
        if (index > 0) {
            const newSections = [...sections];
            [newSections[index], newSections[index - 1]] = [newSections[index - 1], newSections[index]];
            setSections(newSections);
        }
    }

    function moveSectionDown(index) {
        if (index < sections.length - 1) {
            const newSections = [...sections];
            [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
            setSections(newSections);
        }
    }

    function deleteSection(index) {
        const updatedSections = sections.filter((_, i) => i !== index);
        setSections(updatedSections);
    }

    useEffect(() => {
        getAllSections()
    }, [pageId]);


    return(
        <>
            <div className="space-y-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-5">
                {
                    sections.map((section, index) => (
                        <div key={index} className="relative border border-dotted rounded">

                            {section.type === 'hero' && (
                                <HeroSection
                                    idx={index}
                                    slides={section.content}
                                    allSections={sections}
                                    updateSections={updateSections}
                                    boiler={heroBoilerPlate}
                                />
                            )}

                            {section.type === 'banner' && (
                                <BannerSection image={section.content.image} updateSections={updateSections} idx={index}/>
                            )}

                            {section.type === 'text' && (
                                <TextSection data={section.content} updateSections={updateSections} idx={index}/>
                            )}

                            <button
                                onClick={() => deleteSection(index)}
                                className="float-right bg-red-500 text-white p-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <div className="right-0 flex space-x-2">
                                {index > 0 && (
                                    <button
                                        className="bottom-2 left-2 bg-blue-600 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-900 text-black dark:text-white p-2 rounded"
                                        onClick={() => moveSectionUp(index)}
                                    >
                                        Move Up
                                    </button>
                                )}
                                {index < sections.length - 1 && (
                                    <button
                                        className="bottom-2 left-2 bg-blue-600 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-900 text-black dark:text-white p-2 rounded"
                                        onClick={() => moveSectionDown(index)}
                                    >
                                        Move Down
                                    </button>
                                )}


                            </div>
                        </div>
                    ))
                }
                <hr/>
                <button onClick={saveSections} className="bg-blue-500 p-3 rounded">
                    Save
                </button>
            </div>
            <div className="space-x-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-5 flex">
                <button className="bg-purple-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...heroBoilerPlate}])
                    }
                }> Add Hero
                </button>
                <button className="bg-white-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...bannerBoilerPlate}])
                    }
                }> Add Banner
                </button>
                <button className="bg-blue-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...textBoilerPlate}])
                    }
                }> Add Text</button>
                <button className="bg-green-500 p-3 rounded"> Add Gallery</button>
                <button className="bg-yellow-500 p-3 rounded"> Add Team</button>
                <button className="bg-orange-500 p-3 rounded"> Add Contact Form</button>
            </div>
        </>
    )
}