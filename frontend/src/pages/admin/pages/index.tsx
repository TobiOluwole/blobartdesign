import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";
import {useAppDispatch, useAppSelector} from "@/store";
import {useEffect, useState} from "react";
import {getPages} from "@/store/app/actions";
import {UnknownAction} from "redux";
import {IAppState} from "@/store/app/slice";
import Link from "next/link";
import AddPages from "@/components/admin/pages/addPages";

function PagesView(){

    const dispatch = useAppDispatch();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => {
        dispatch(getPages() as UnknownAction)
        setIsAddModalOpen(false)
    };

    const pages: IAppState["pages"] = useAppSelector((state) => state.app.pages)

    useEffect(() => {

        dispatch(getPages() as UnknownAction)

    }, []);

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg mb-3">
                <h1>
                    Pages

                    <button onClick={openAddModal} className="float-end">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-6 w-6">
                            <path
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                        </svg>
                    </button>
                </h1>
            </div>

            <div className="relative overflow-x-auto">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400 rounded">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-tl rounded-lg">
                            Name (english)
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-tl rounded-lg">
                                Name (turkish)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Route
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-tr rounded-lg">
                                Home
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-tr rounded-lg">
                                Actions
                            </th>
                        </tr>
                        </thead>
                    <tbody>
                    {
                        pages.map((page, idx) => {
                            return (
                                <tr key={idx} className="border-b  dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {page.display_name}
                                    </th>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {page.display_name_tr}
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link href={`/${page.url}`} target="_blank">/{page.url}</Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {page.is_home == 1 ? 'yes' : 'no'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={`pages/${page.id}`}>
                                            <svg className="h-6 w-6 fill-current"
                                                 viewBox="0 0 512 512">
                                                <path
                                                    d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

            </div>

            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            <AddPages />
                        </p>
                        <div className="mt-6 flex justify-end space-x-2">
                            <button
                                onClick={closeAddModal}
                                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default protectedRouteCheck(SideBar(PagesView))