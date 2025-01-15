import React, {use, useEffect, useState} from "react";
import LangConv from "@/components/web/langConv";
import {useAppSelector} from "@/store";
import { useSearchParams } from 'next/navigation'

export default function Gallery({ data, sectionId }) {
    const { title_en, title_tr, galleries } = data;
    const [activeGroup, setActiveGroup] = useState(null); // State to track the active group filter
    const [groups, setGroups] = useState([]); // State to track the active group filter

    const searchParams = useSearchParams()
    const search = searchParams.get('s')

    useEffect(() => {
        galleries.forEach((gallery) => {
            const groupNames = { group_name_en: gallery.group_name_en, group_name_tr: gallery.group_name_tr };

            setGroups(prevValue => {
                // Check if an object with matching properties exists in the array
                const exists = prevValue.some(value =>
                    value.group_name_en === groupNames.group_name_en &&
                    value.group_name_tr === groupNames.group_name_tr
                );

                if (!exists) {
                    return [...prevValue, groupNames]; // Create a new array with the new group added
                }

                return prevValue; // No changes needed
            });
        });
    }, [data]);


    const language = useAppSelector((state) => state.web.lang);

    const handleGroupClick = (groupName) => {
        setActiveGroup(groupName === activeGroup ? null : groupName);
    };

    return (
        <div className="max-w-[1140px] m-auto">
            {/* Page Titles */}
            <h1 className="text-4xl text-center mb-4 text-[#272727] tracking-[10px] sm:leading-8 md:leading-[65px] break-words uppercase">
                <LangConv en={title_en} tr={title_tr} />
            </h1>

            {/* Group Filter Menu */}
            <div className="flex justify-center space-x-1 mb-8">
                <button
                    onClick={() => handleGroupClick(null)}
                    className={`px-2 py-2 underline-offset-8 capitalize  ${
                        activeGroup === null
                            ? "underline text-black"
                            : "text-[#999]"
                    }`}
                >
                    <LangConv en={'All'} tr={'Tümü'} />
                </button>
                {groups.map((group, index) => (
                    <button
                        key={index}
                        onClick={() => handleGroupClick(language == 'en' ? group.group_name_en : group.group_name_tr)}
                        className={`px-2 py-2 underline-offset-8 capitalize  ${
                            activeGroup === group.group_name_en  || activeGroup === group.group_name_tr
                                ? "underline text-black"
                                : "text-[#999]"
                        }`}
                    >
                        <LangConv en={group.group_name_en} tr={group.group_name_tr} />
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div className="flex flex-wrap w-full m-auto justify-start items-center">
                {galleries.map((gallery, index) => {

                    let shouldShow =
                        !activeGroup || gallery.group_name_en === activeGroup || gallery.group_name_tr === activeGroup;

                    if(search){
                        console.log(search)
                        console.log(gallery.name_en, gallery.name_en.includes(search))
                        console.log(gallery.name_tr, gallery.name_tr.includes(search))
                        shouldShow = gallery.name_en.toLowerCase().includes(search) || gallery.name_tr.toLowerCase().includes(search)
                    }

                    return (
                        <a
                            key={index}
                            href={'gallery/'+sectionId+'/'+ (language == 'en' ? gallery.name_en : gallery.name_tr)}
                            className={`transform transition-all ease-in-out duration-500 ${
                                shouldShow ? "scale-100 opacity-100 md:w-1/2 px-3 mb-6" : "scale-0 opacity-0 w-0"
                            }`}>
                            {gallery.images[0] && (
                                <div className="relative group overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={process.env.BACKEND_URL+gallery.images[0]}
                                        alt={gallery.name_en}
                                        className="w-full h-[303.75px] object-cover transform group-hover:scale-105 transition-all duration-500 group-hover:brightness-90"
                                    />
                                    {/* Hover Text */}
                                    <div className="absolute bottom-0 left-0 w-5/6 bg-white translate-y-full group-hover:translate-y-0 transition-all group-hover:delay-200 duration-500">
                                        <div className="text-[#272727] p-4 tracking-[5px] uppercase">
                                            <h3 className="text-xl font-light">
                                                <LangConv en={gallery.name_en} tr={gallery.name_tr} />
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
