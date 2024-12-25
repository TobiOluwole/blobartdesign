import {useState} from "react";

export default function LogoUpload() {

    const [imagePreview, setImagePreview] = useState("https://blobartdesign.com/panel/uploads/settings_v/blob.png");
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result as any);
            };
            reader.readAsDataURL(file);
        } else {
            setFileName("");
            setImagePreview(null);
        }
    };


    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 bg-gray-100 dark:bg-gray-900 p-2 rounded mb-3">Logo ( white and black only )</h1>
            <div className="max-w-sm rounded-lg shadow-md overflow-hidden items-center bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <div className="px-4 py-6">
                    <div
                        className={`max-w-sm p-6 mb-4 ${
                            imagePreview ? "" : "bg-gray-100 border-dashed border-2 border-gray-400"
                        } rounded-lg items-center mx-auto text-center cursor-pointer`}
                        onClick={() => document.getElementById("upload").click()}
                    >
                        {!imagePreview ? (
                            <>
                                <input
                                    id="upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="upload" className="cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-gray-700 mx-auto mb-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                        />
                                    </svg>
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                                        Upload picture
                                    </h5>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">
                                        Choose photo size should be less than{" "}
                                        <b className="text-gray-600">2mb</b>
                                    </p>
                                    <p className="font-normal text-sm text-gray-400 md:px-6">
                                        and should be in <b className="text-gray-600">JPG, PNG, or GIF</b>{" "}
                                        format.
                                    </p>
                                    <span className="text-gray-500 bg-gray-200 z-50">{fileName}</span>
                                </label>
                            </>
                        ) : (
                            <img
                                src={imagePreview}
                                alt="Image preview"
                                className="max-h-48 rounded-lg mx-auto"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                            <label
                                className="w-full text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer"
                                onClick={() => document.getElementById("upload").click()}
                            >
                                <span className="text-center ml-2">Upload</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}