import {FormEvent, useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import axios from "@/utils/axiosInstance";

export default function AddPages(){

    const [pageInfo, changePageInfo] = useState({
        is_home: false,
        url: '',
        display_name: '',
        display_name_tr: '',
    })

    function updatePageInfo(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const loading = toast.loading('creating page ..')
        axios.post('page/', pageInfo)
            .then((data) => {
                toast.success('page created..', {id: loading})
                changePageInfo(data.data)
            })
            .catch((e) => {
                toast.error('error creating page info..', {id: loading})
                console.log(e)
            })
            .finally(() => {
                changePageInfo({
                    is_home: false,
                    url: '',
                    display_name: '',
                    display_name_tr: '',
                })
            })
    }

    function handleChange(key:string, value: string|number|null){
        changePageInfo((prev) => {
            return {...prev, [key]: value}
        })
    }
    return (
        <>
            <form onSubmit={updatePageInfo}
                  className="space-y-6 bg-transparent">
                <h1 className="text-3xl">Page Info</h1>
                <div>
                    <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        URL
                    </label>
                    <div className="relative">
                        <span
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-3 text-gray-500 dark:text-gray-200">/</span>
                        <input
                            id="url"
                            type="text"
                            value={pageInfo.url}
                            onChange={(e) => {
                                handleChange('url', e.target.value)
                            }}
                            className="pl-6 mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        id="is_home"
                        type="checkbox"
                        checked={pageInfo.is_home}
                        onChange={(e) => {
                            handleChange('is_home', e.target.value == 'on' ? 1 : 0)
                        }}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="is_home"
                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Home Page
                    </label>
                </div>
                <div>
                    <label
                        htmlFor="display_name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Name (English)
                    </label>
                    <input
                        id="display_name"
                        type="text"
                        value={pageInfo.display_name}
                        onChange={(e) => {
                            handleChange('display_name', e.target.value)
                        }}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="display_name_tr"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                        Name (Turkish)
                    </label>
                    <input
                        id="display_name_tr"
                        type="text"
                        value={pageInfo.display_name_tr}
                        onChange={(e) => {
                            handleChange('display_name_tr', e.target.value)
                        }}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
                    />
                </div>
                <button type="submit" className="bg-green-400 dark:bg-green-900 p-2 rounded">submit</button>
            </form>
        </>
    )
}