import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "@/utils/axiosInstance";
import HeroSection from "@/components/admin/sections/hero";
import BannerSection from "@/components/admin/sections/banner";
import TextSection from "@/components/admin/sections/text";
import Gallery from "@/components/admin/sections/gallery";
import Team from "@/components/admin/sections/team";

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

    const galleryBoilerPlate = {
        type: 'gallery',
        page_id: pageId,
        content: {
            title_en:'',
            title_tr:'',
            galleries: [{
                name_en: '',
                name_tr: '',
                group_name_en: '',
                group_name_tr: '',
                images: []
            }]
        }
    }

    const teamBoilerPlate = {
        type: 'team',
        page_id: pageId,
        content: {
            title_en:'',
            title_tr:'',
            members: [{
                name: '',
                position_en: '',
                position_tr: '',
                image: ''
            }]
        }
    }

    const contactBoilerPlate = {
        type: 'contact',
        page_id: pageId,
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

    function updateSections(s: any){
        setSections(s)
    }

    function moveSectionUp(index: any) {
        if (index > 0) {
            const newSections = [...sections];
            [newSections[index], newSections[index - 1]] = [newSections[index - 1], newSections[index]];
            setSections(newSections);
        }
    }

    function moveSectionDown(index: any) {
        if (index < sections.length - 1) {
            const newSections = [...sections];
            [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
            setSections(newSections);
        }
    }

    async function deleteSection(sectionId: any) {
        const toastToDelete = toast.loading('deleting section...')
        try {
            // Send a request to delete the section
            const response = await axios.delete(`sections/${sectionId}`);

            if (response.status === 200) {
                // If successful, update the state to remove the section
                updateSections((prevSections) => {
                    return prevSections.filter(section => section.id !== sectionId);
                });
                // Optionally, show a success toast or message
                toast.success("Section deleted successfully!", {id: toastToDelete});
            }
        } catch (error) {
            console.error("Error deleting section", error);
            toast.error("Error deleting section.", {id: toastToDelete});
        }
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

                            {section.type === 'gallery' && (
                                <Gallery gallery={section.content} updateSections={updateSections} idx={index}/>
                            )}

                            {section.type === 'team' && (
                                <Team team={section.content} updateSections={updateSections} idx={index}/>
                            )}

                            <button
                                onClick={() => deleteSection(section.id)}
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
                <button className="bg-green-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...galleryBoilerPlate}])
                    }
                }> Add Gallery</button>
                <button className="bg-yellow-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...teamBoilerPlate}])
                    }
                }> Add Team</button>
                <button className="bg-orange-500 p-3 rounded" onClick={
                    () => {
                        setSections([...sections, {...contactBoilerPlate}])
                    }
                }> Add Contact Form</button>
            </div>
        </>
    )
}