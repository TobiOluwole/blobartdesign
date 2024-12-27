import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";
import {useEffect, useState} from "react";
import axios from "@/utils/axiosInstance";
import {toast} from "react-hot-toast";

function SocialsPage(){
    const [socials, setSocialsData] = useState({
        phone: "",
        email: "",
        address: "",
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        location_link: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSocialsData({ ...socials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        saveSocials()
    };

    function getSocials(){
        const loadingToast = toast.loading('getting socials info..')
        axios.get('/socials/')
            .then((data) => {
                toast.success('socials info gotten..', {id: loadingToast})
                setSocialsData(data.data)
            }).catch((e) => {
            toast.error('error getting socials info..', {id: loadingToast})
        })
    }

    function saveSocials(){
        const loadingToast = toast.loading('saving socials info..')
        axios.put('/socials/', socials)
            .then((data) => {
                toast.success('socials info saved..', {id: loadingToast})
                setSocialsData(data.data)
            }).catch((e) => {
            toast.error('error saving socials info..', {id: loadingToast})
        })
    }

    useEffect(() => {
        getSocials()
    }, []);

    return (
        <form onSubmit={handleSubmit}
              className="w-full mx-auto shadow-md rounded-lg space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200">Contact Information</h2>

            {/* Phone Number */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Phone
                    Number</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={socials.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email"
                       className="block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={socials.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Address */}
            <div>
                <label htmlFor="address"
                       className="block text-sm font-medium text-gray-700 dark:text-gray-400">Address</label>
                <input
                    name="address"
                    id="address"
                    value={socials.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="location_link"
                       className="block text-sm font-medium text-gray-700 dark:text-gray-400">Location link</label>
                <input
                    type="url"
                    name="location_link"
                    id="location_link"
                    value={socials.location_link}
                    onChange={handleChange}
                    placeholder="Enter Google Maps or Apple Maps location"
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
                <div>
                    <label htmlFor="facebook"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-400">Facebook</label>
                    <input
                        type="url"
                        name="facebook"
                        id="facebook"
                        value={socials.facebook}
                        onChange={handleChange}
                        placeholder="Enter Facebook URL"
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="twitter"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-400">Twitter</label>
                    <input
                        type="url"
                        name="twitter"
                        id="twitter"
                        value={socials.twitter}
                        onChange={handleChange}
                        placeholder="Enter Twitter URL"
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="instagram"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-400">Instagram</label>
                    <input
                        type="url"
                        name="instagram"
                        id="instagram"
                        value={socials.instagram}
                        onChange={handleChange}
                        placeholder="Enter Instagram URL"
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="linkedin"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-400">LinkedIn</label>
                    <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        value={socials.linkedin}
                        onChange={handleChange}
                        placeholder="Enter LinkedIn URL"
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:ring-offset-gray-800"
            >
                Save Contact Information
            </button>
        </form>
    );
}

export default protectedRouteCheck(SideBar(SocialsPage))