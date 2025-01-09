import {useDispatch} from "react-redux";
import {FormEvent, useState} from "react";
import {resetPassword} from "@/store/auth/actions";
import Link from "next/link";
import {UnknownAction} from "redux";

interface ResetPasswordCardProps {
    token: string
}

export default function ResetPasswordCard({token}: ResetPasswordCardProps) {
    const dispatch = useDispatch()

    const [{password, password_confirmation}, setPasswords] = useState({password: '', password_confirmation: ''})


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        dispatch(resetPassword(token, {password, password_confirmation}) as unknown as UnknownAction)
    }

    return (
        <>
            <form onSubmit={onSubmit}
                  className="p-5 rounded-xl shadow w-96 grid grid-cols-1 space-y-5 bg-white dark:bg-black">
                <h2 className="font-bold text-xl w-full">Reset Password..</h2>
                <small>confirm your new password to change it</small>

                <input
                    type="password"
                    placeholder="password"
                    className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 focus:outline-0"
                    value={password}
                    onChange={(e) => {
                        setPasswords({password: e.target.value, password_confirmation})
                    }}
                />

                <input
                    type="password"
                    placeholder="password confirmation"
                    className="px-2 py-1 rounded-l bg-slate-100 dark:bg-slate-900 flex-1 focus:outline-0"
                    value={password_confirmation}
                    onChange={(e) => {
                        setPasswords({password_confirmation: e.target.value, password})
                    }}
                />


                <div>
                    <button type="submit" className="bg-blue-400 dark:bg-blue-900 p-2 rounded float-end">
                        change
                    </button>
                </div>
            </form>
            <Link href="/admin/login" className="-mt-12 ml-5 w-fit">back to login..</Link>
        </>
    );
}