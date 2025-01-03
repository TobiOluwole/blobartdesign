export default function Team({ team, updateSections, idx }){

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updateSections((prevSections) => {
            const newSections = [...prevSections];

            // Update the specific field of the slide if it exists
            if (newSections[idx]) {
                newSections[idx].content[name] = value
            }

            return newSections;
        });
    };

    const addMember = () => {
        updateSections((prevSections) => {
            const newSections = [...prevSections]; // Clone the sections array
            if (newSections[idx]) {
                newSections[idx] = {
                    ...newSections[idx],
                    content: {
                        ...newSections[idx].content,
                        members: [
                            ...newSections[idx].content.members,
                            { name: "", position_en: "", position_tr: "", image: "" },
                        ],
                    },
                };
            }
            return newSections;
        });

        console.log(team); // Should log the updated team
    };


    function removeMember(index) {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]) {
                newSections[idx] = {
                    ...newSections[idx],
                    content: {
                        ...newSections[idx].content,
                        members: newSections[idx].content.members.filter((_, i) => i !== index),
                    },
                };
            }
            return newSections;
        });
    }


    function moveMember(memberIndex, direction) {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            if (newSections[idx]) {
                const members = [...newSections[idx].content.members];

                // Ensure the target index is within bounds
                const targetIndex = memberIndex + direction;
                if (targetIndex >= 0 && targetIndex < members.length) {
                    const [movedMember] = members.splice(memberIndex, 1); // Remove member
                    members.splice(targetIndex, 0, movedMember); // Insert at new position
                }

                newSections[idx] = {
                    ...newSections[idx],
                    content: {
                        ...newSections[idx].content,
                        members,
                    },
                };
            }
            return newSections;
        });
    }



    function updateMemberImage(index, value){
        if (value) {
            const reader = new FileReader();
            reader.onload = (event) => {
                updateMember(index, 'image', event.target.result);
            };
            reader.readAsDataURL(value);
        }
    }


    const updateMember = (index, field, value) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];

            // Update the specific field of the slide if it exists
            if (newSections[idx] && newSections[idx].content.members[index]) {
                newSections[idx].content.members[index][field] = value
            }

            return newSections;
        });
    };

    return (
        <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">

            <h2 className="text-xl font-bold">Team Section</h2>
            <div className="">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Title (EN)</label>
                <input
                    type="text"
                    name="title_en"
                    value={team.title_en}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Title (TR)</label>
                <input
                    type="text"
                    name="title_tr"
                    value={team.title_tr}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                />
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Members</h3>
                {team.members.map((member, index) => (
                    <div key={index} className="mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={member.name}
                                onChange={(e) => updateMember(index, 'name', e.target.value)}
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Position (English)</label>
                            <input
                                type="text"
                                name="position_en"
                                value={member.position_en}
                                onChange={(e) => updateMember(index, 'position_en', e.target.value)}
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Position (Turkish)</label>
                            <input
                                type="text"
                                name="position_tr"
                                value={member.position_tr}
                                onChange={(e) => updateMember(index, 'position_tr', e.target.value)}
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>
                        {member.image && (
                            <div className="my-4 w-full grid place-content-center">
                                <img
                                    src={member.image.startsWith('data:image/') ? member.image : process.env.BACKEND_URL + member.image}
                                    alt={`Image for  ${index + 1}`}
                                    className="max-w-full max-h-40 object-cover rounded-md border border-gray-300 dark:border-gray-700"
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Image</label>
                            <input
                                type="file"
                                name="image"
                                onChange={(e) => updateMemberImage(index, e.target?.files[0])}
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => moveMember(index, "up")}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Move Up
                                </button>
                            )}
                            {index < team.members.length - 1 && (
                                <button
                                    type="button"
                                    onClick={() => moveMember(index, "down")}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Move Down
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => removeMember(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addMember}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Member
                </button>
            </div>
        </div>
    )
}