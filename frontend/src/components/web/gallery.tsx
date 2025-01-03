import React, { useState } from "react";
import Link from "next/link";

export default function Gallery({ data, sectionId }) {
    const { title_en, title_tr, galleries } = data;
    const [activeGroup, setActiveGroup] = useState(null); // State to track the active group filter

    const handleGroupClick = (groupName) => {
        setActiveGroup(groupName === activeGroup ? null : groupName);
    };

    return (
        <div className="">
            {/* Page Titles */}
            <h1 className="text-4xl text-center mb-4 text-[#272727] tracking-headerWide sm:leading-8 md:leading-[65px] break-words capitalize">{title_en}</h1>

            {/* Group Filter Menu */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => handleGroupClick(null)}
                    className={`px-4 py-2 underline-offset-8  ${
                        activeGroup === null
                            ? "underline text-black"
                            : "text-[#999]"
                    }`}
                >
                    All
                </button>
                {galleries.map((gallery, index) => (
                    <button
                        key={index}
                        onClick={() => handleGroupClick(gallery.group_name_en)}
                        className={`px-4 py-2 underline-offset-8 capitalize  ${
                            activeGroup === gallery.group_name_en
                                ? "underline text-black"
                                : "text-[#999]"
                        }`}
                    >
                        {gallery.group_name_en}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div className="flex flex-wrap w-[75vw] m-auto justify-start">
                {galleries.map((gallery, index) => {
                    const shouldShow =
                        !activeGroup || gallery.group_name_en === activeGroup;

                    return (
                        <Link
                            key={index}
                            href={'gallery/'+sectionId+'/'+gallery.name_tr}
                            className={` transform transition-all ease-in-out duration-500 ${
                                shouldShow ? "scale-100 opacity-100 w-1/2 px-3 mb-6" : "scale-0 opacity-0 w-0"
                            }`}>
                            {gallery.images[0] && (
                                <div className="relative group overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={process.env.BACKEND_URL+gallery.images[0]}
                                        alt={gallery.name_en}
                                        className="min-w-full h-[303.75px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Hover Text */}
                                    <div className="absolute bottom-0 left-0 w-5/6 bg-white translate-y-full group-hover:translate-y-0 transition-all group-hover:delay-200 duration-500">
                                        <div className="text-[#272727] p-4 tracking-[5px] uppercase">
                                            <h3 className="text-xl font-light">
                                                {gallery.name_en || "No Name"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
