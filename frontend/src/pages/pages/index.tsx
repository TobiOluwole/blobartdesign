import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";
import {useAppDispatch, useAppSelector} from "@/store";
import {useEffect, useState} from "react";
import {getPages} from "@/store/app/actions";
import {UnknownAction} from "redux";
import {IAppState} from "@/store/app/slice";

function PagesView(){

    const dispatch = useAppDispatch();

    const pages: IAppState["pages"] = useAppSelector((state) => state.app.pages)

    useEffect(() => {

        dispatch(getPages() as UnknownAction)

    }, []);

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded mb-3">
                <h1>Pages</h1>
            </div>

            <div className="relative overflow-x-auto">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400 rounded">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Route
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Home
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                pages.map((page, idx) => {
                                    return (
                                            <tr key={idx} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {page.display_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    /{page.url}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {page.page_id == 0 ? 'Main' : 'Sub Page'}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {page.is_home == 1 ? 'yes' : 'no'}
                                                </td>
                                            </tr>
                                        )
                                })
                            }
                        </tbody>
                    </table>

            </div>
        </>
    )
}


export default protectedRouteCheck(SideBar(PagesView))