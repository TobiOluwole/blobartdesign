export default function Gallery({ gallery, updateSections, idx }) {
    const handleChange = (field, value) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]) {
                newSections[idx].content[field] = value; // Update the field directly in the section
            }
            return newSections;
        });
    };

    const handleGalleriesChange = (groupIndex, field, value) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]?.content.galleries[groupIndex]) {
                newSections[idx].content.galleries[groupIndex][field] = value;
            }
            return newSections;
        });
    };

    const handleImageUpload = (groupIndex, files) => {
        const readerPromises = Array.from(files).map(
            (file: any) =>
                new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (event) => resolve(event.target.result);
                    reader.readAsDataURL(file);
                })
        );

        Promise.all(readerPromises).then((base64Images) => {
            updateSections((prevSections) => {
                const newSections = [...prevSections];
                if (newSections[idx]?.content.galleries[groupIndex]) {
                    newSections[idx].content.galleries[groupIndex].images.push(...base64Images);
                }
                return newSections;
            });
        });
    };

    const handleRemoveImage = (groupIndex, imageIndex) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]?.content.galleries[groupIndex]) {
                newSections[idx].content.galleries[groupIndex].images = newSections[idx].content.galleries[
                    groupIndex
                    ].images.filter((_, i) => i !== imageIndex);
            }
            return newSections;
        });
    };

    const handleAddGroup = () => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]) {
                newSections[idx].content.galleries.push({
                    name_en: "",
                    name_tr: "",
                    group_name_en: "",
                    group_name_tr: "",
                    images: [],
                });
            }
            return newSections;
        });
    };

    const removeGroup = (groupIndex) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]) {
                newSections[idx].content.galleries.splice(groupIndex, 1);
            }
            return newSections;
        });
    };

    return (
        <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Gallery Section</h2>

            {/* Titles */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Title (EN)
                    </label>
                    <input
                        type="text"
                        value={gallery.title_en}
                        onChange={(e) => handleChange("title_en", e.target.value)}
                        className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                        Title (TR)
                    </label>
                    <input
                        type="text"
                        value={gallery.title_tr}
                        onChange={(e) => handleChange("title_tr", e.target.value)}
                        className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                    />
                </div>
            </div>

            {/* Groups */}
            {gallery.galleries.map((gallery, groupIndex) => (
                <div key={groupIndex} className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold">Group {groupIndex + 1}</h3>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Name (EN)
                            </label>
                            <input
                                type="text"
                                value={gallery.name_en}
                                onChange={(e) =>
                                    handleGalleriesChange(groupIndex, "name_en", e.target.value)
                                }
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Name (TR)
                            </label>
                            <input
                                type="text"
                                value={gallery.name_tr}
                                onChange={(e) =>
                                    handleGalleriesChange(groupIndex, "name_tr", e.target.value)
                                }
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Group Name Type (EN)
                            </label>
                            <input
                                type="text"
                                value={gallery.group_name_en}
                                onChange={(e) =>
                                    handleGalleriesChange(groupIndex, "group_name_en", e.target.value)
                                }
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Group Name Type (TR)
                            </label>
                            <input
                                type="text"
                                value={gallery.group_name_tr}
                                onChange={(e) =>
                                    handleGalleriesChange(groupIndex, "group_name_tr", e.target.value)
                                }
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                            Images
                        </label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => handleImageUpload(groupIndex, e.target.files)}
                            className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                        />
                        <div className="mt-4 flex flex-wrap gap-4">
                            {gallery.images.map((image, imageIndex) => (
                                <div key={imageIndex} className="relative group">
                                    <img
                                        src={image.startsWith('data:image/') ? image : process.env.BACKEND_URL + image}
                                        alt={`Image ${imageIndex}`}
                                        className="w-20 h-20 object-cover rounded-md border"
                                    />
                                    <button
                                        onClick={() => handleRemoveImage(groupIndex, imageIndex)}
                                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => removeGroup(groupIndex)}
                    >
                        Remove Group
                    </button>
                </div>
            ))}

            {/* Add Group Button */}
            <button
                onClick={handleAddGroup}
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:ring focus:ring-green-400 mt-4"
            >
                Add Group
            </button>
        </div>
    );
}
