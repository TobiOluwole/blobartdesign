import {useMemo, useState} from "react";
import 'react-quill-new/dist/quill.snow.css';
import dynamic from "next/dynamic";

export default function TextSection({data, updateSections, idx}){

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill-new'), { ssr: false }),[]);

    const handleChange = (field, value) => {

        updateSections((prevSections) => {
            const newSections = [...prevSections];
            // Update the specific field of the slide if it exists
            if (newSections[idx]) {
                newSections[idx].content[field] = value;
            }

            return newSections;
        });

    };

    return (
        <div className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">

            {/* English Rich Text Editor */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Text (English)</label>
                <ReactQuill
                    theme="snow"
                    value={data.text_en}
                    onChange={(value) => handleChange('text_en', value)}
                    className="mt-1 bg-white dark:bg-gray-700"
                />
            </div>

            {/* Turkish Rich Text Editor */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Text (Turkish)</label>
                <ReactQuill
                    theme="snow"
                    value={data.text_tr}
                    onChange={(value) => handleChange('text_tr', value)}
                    className="mt-1 bg-white dark:bg-gray-700"
                />
            </div>
        </div>
    );
}