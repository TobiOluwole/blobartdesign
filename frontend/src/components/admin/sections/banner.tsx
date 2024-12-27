export default function BannerSection({image, updateSections, idx}){

    function updateBannerImage(value){
        if (value) {
            const reader = new FileReader();
            reader.onload = (event) => {
                updateImage( event.target.result);
            };
            reader.readAsDataURL(value);
        }
    }


    const updateImage = (value) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];
            // Update the specific field of the slide if it exists
            if (newSections[idx]) {
                newSections[idx].content.image = value;
            }

            return newSections;
        });
    };

    return (
        <>
            <div className="space-y-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Edit Page Banner
                </h2>
                    <div
                        className="relative border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Banner Image
                        </h3>

                        {/* Image Preview */}
                        {image && (
                            <div className="mb-4 w-full grid place-content-center">
                                <img
                                    src={image.startsWith('data:image/') ? image : process.env.BACKEND_URL + image}
                                    alt={`Image`}
                                    className="max-w-full max-h-40 object-cover rounded-md border border-gray-300 dark:border-gray-700"
                                />
                            </div>
                        )}

                        {/* Image Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Image
                            </label>
                            <input
                                type="file"
                                // value={slide.image}
                                onChange={(e) => updateBannerImage(e.target?.files[0])}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                                placeholder="Enter image URL"
                            />
                        </div>
                    </div>
            </div>
        </>
    )
}