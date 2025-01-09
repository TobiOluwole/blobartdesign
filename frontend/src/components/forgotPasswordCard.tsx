import { FormEvent, useState } from "react";
import {useDispatch} from "react-redux";
import Link from "next/link";
import {sendPasswordResetLink} from "@/store/auth/actions";
import {UnknownAction} from "redux";

export default function ForgotPasswordCard(token: string) {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')


    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        dispatch(sendPasswordResetLink(email) as unknown as UnknownAction)

    }

    return (
        <>
            <form onSubmit={onSubmit} className="p-5 rounded-xl shadow w-96 grid grid-cols-1 space-y-5 bg-white dark:bg-black">
                <h2 className="font-bold text-xl w-full">Forgot password..</h2>
                <small>enter your email to be able to receive a link to change your password</small>

                <div className="relative w-full flex">
                    <input
                        type="text"
                        placeholder="Your email"
                        className="px-2 py-1 rounded-l bg-slate-100 dark:bg-slate-900 flex-1 focus:outline-0"
                        value={email}
                        onChange={ (e)=>{ setEmail(e.target.value) }}
                    />
                    <button className="flex-none h-full bg-slate-300 dark:bg-slate-800 rounded-r px-2">
                        GET MAIL
                    </button>
                </div>


                <div className="h-8">
                </div>
            </form>
            <Link href="/admin/login" className="-mt-12 ml-5 w-fit">back to login..</Link>
        </>
    );
}
