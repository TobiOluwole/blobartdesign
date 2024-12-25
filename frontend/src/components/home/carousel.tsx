import React, { useState } from "react";

export default function Carousel() {
    const [slides, setSlides] = useState([
        { id: 1, image: "/img1.jpg", text: "First Slide" },
        { id: 2, image: "/img2.jpg", text: "Second Slide" },
        { id: 3, image: "/img3.jpg", text: "Third Slide" },
    ]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [newSlide, setNewSlide] = useState({ image: "", text: "" });

    const handleSlideChange = (index) => {
        setCurrentSlideIndex(index);
    };

    const handleEditSlide = (field, value) => {
        const updatedSlides = [...slides];
        updatedSlides[currentSlideIndex][field] = value;
        setSlides(updatedSlides);
    };

    const handleAddSlide = () => {
        if (newSlide.image && newSlide.text) {
            setSlides([...slides, { ...newSlide, id: Date.now() }]);
            setNewSlide({ image: "", text: "" });
        }
    };

    const handleRemoveSlide = (index) => {
        const updatedSlides = slides.filter((_, i) => i !== index);
        setSlides(updatedSlides);
        setCurrentSlideIndex(0);
    };

    return (
        <div className="container mx-auto py-8">
            {/* Carousel */}
            <div className="relative max-w-lg mx-auto">
                {slides.length > 0 ? (
                    <div>
                        <img
                            src={slides[currentSlideIndex].image}
                            alt={`Slide ${currentSlideIndex + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                        <p className="text-center mt-4 text-lg">
                            {slides[currentSlideIndex].text}
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentSlideIndex
                                            ? "bg-blue-500"
                                            : "bg-gray-300"
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No slides available</p>
                )}
            </div>

            {/* Edit Section */}
            {slides.length > 0 && (
                <div className="mt-8 max-w-lg mx-auto">
                    <h3 className="text-xl font-bold mb-4">Edit Slide</h3>
                    <label className="block mb-2">
                        Image URL:
                        <input
                            type="text"
                            value={slides[currentSlideIndex].image}
                            onChange={(e) =>
                                handleEditSlide("image", e.target.value)
                            }
                            className="w-full p-2 border rounded mt-1"
                        />
                    </label>
                    <label className="block mb-4">
                        Text:
                        <input
                            type="text"
                            value={slides[currentSlideIndex].text}
                            onChange={(e) =>
                                handleEditSlide("text", e.target.value)
                            }
                            className="w-full p-2 border rounded mt-1"
                        />
                    </label>
                    <button
                        onClick={() => handleRemoveSlide(currentSlideIndex)}
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                    >
                        Remove Slide
                    </button>
                </div>
            )}

            {/* Add New Slide */}
            <div className="mt-8 max-w-lg mx-auto">
                <h3 className="text-xl font-bold mb-4">Add New Slide</h3>
                <label className="block mb-2">
                    Image URL:
                    <input
                        type="text"
                        value={newSlide.image}
                        onChange={(e) =>
                            setNewSlide({ ...newSlide, image: e.target.value })
                        }
                        className="w-full p-2 border rounded mt-1"
                    />
                </label>
                <label className="block mb-4">
                    Text:
                    <input
                        type="text"
                        value={newSlide.text}
                        onChange={(e) =>
                            setNewSlide({ ...newSlide, text: e.target.value })
                        }
                        className="w-full p-2 border rounded mt-1"
                    />
                </label>
                <button
                    onClick={handleAddSlide}
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                    Add Slide
                </button>
            </div>
        </div>
    );
};