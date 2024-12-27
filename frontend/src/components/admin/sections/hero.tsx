export default function HeroSection({slides, idx,  allSections, updateSections, boiler}){

    function addHeroSlide() {
        updateSections(() => {
            const newSections = [...allSections];

            // Update the section if the index exists, or add a new section if it doesn't
            if (newSections[idx]) {
                newSections[idx] = { ...newSections[idx], content: [...newSections[idx].content, boiler.content[0]] };
            }

            return newSections;
        });
    }

    function removeHeroSlide(index, slideIndex) {
        updateSections(() => {
            const newSections = [...allSections];

            // Update the section if the index exists, or add a new section if it doesn't
            if (newSections[index]) {
                newSections[index].content.splice(slideIndex, 1);
            }

            return newSections;
        });
    }

    function updateSlideImage(index, field, value){
        if (value) {
            const reader = new FileReader();
            reader.onload = (event) => {
                updateSlide(index, field, event.target.result);
            };
            reader.readAsDataURL(value);
        }
    }


    const updateSlide = (index, field, value) => {
        updateSections((prevSections) => {
            const newSections = [...prevSections];

            // Update the specific field of the slide if it exists
            if (newSections[idx] && newSections[idx].content[index]) {
                newSections[idx].content[index] = {
                    ...newSections[idx].content[index],
                    [field]: value,
                };
            }

            return newSections;
        });
    };


    function moveSlide(slideIndex, direction) {
        updateSections((prevSections) => {
            const newSections = [...prevSections];

            if (newSections[idx] && newSections[idx].content[slideIndex]) {
                const slides = [...newSections[idx].content];

                // Ensure the movement is within bounds
                const targetIndex = slideIndex + direction;
                if (targetIndex >= 0 && targetIndex < slides.length) {
                    const [movedSlide] = slides.splice(slideIndex, 1);
                    slides.splice(targetIndex, 0, movedSlide);
                    newSections[idx].content = slides;
                }
            }

            return newSections;
        });
    }


    return (
        <>
            <div className="space-y-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Edit Carousel
                </h2>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className="relative border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Slide {slideIndex + 1}
                        </h3>

                        {/* Image Preview */}
                        {slide.image && (
                            <div className="mb-4 w-full grid place-content-center">
                                <img
                                    src={slide.image.startsWith('data:image/') ? slide.image : process.env.BACKEND_URL + slide.image}
                                    alt={`Slide ${slideIndex + 1}`}
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
                                onChange={(e) => updateSlideImage(slideIndex, "image", e.target?.files[0])}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                                placeholder="Enter image URL"
                            />
                        </div>

                        {/* Text Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Text (english)
                            </label>
                            <input
                                type="text"
                                value={slide.text_en}
                                onChange={(e) => updateSlide(slideIndex, "text_en", e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                                placeholder="Enter slide text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Text (turkish)
                            </label>
                            <input
                                type="text"
                                value={slide.text_tr}
                                onChange={(e) => updateSlide(slideIndex, "text_tr", e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                                placeholder="Enter slide text"
                            />
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex space-x-2">
                                {/* Move Up Button */}
                                {slideIndex > 0 && (
                                    <button
                                        onClick={() => moveSlide(slideIndex, -1)}
                                        className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                                    >
                                        Move Up
                                    </button>
                                )}

                                {/* Move Down Button */}
                                {slideIndex < slides.length - 1 && (
                                    <button
                                        onClick={() => moveSlide(slideIndex, 1)}
                                        className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
                                    >
                                        Move Down
                                    </button>
                                )}
                            </div>

                            {/* Remove Slide Button */}
                            {slides.length > 1 && (
                                <button
                                    onClick={() => removeHeroSlide(idx, slideIndex)}
                                    className="text-red-600 dark:text-red-400 hover:underline text-sm"
                                >
                                    Remove Slide
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {/* Add Slide Button */}
                <button
                    onClick={addHeroSlide}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                    Add Slide
                </button>
            </div>
        </>
    )
}