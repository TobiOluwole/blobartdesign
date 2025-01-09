import { FormEvent, useState } from "react";
import {useDispatch} from "react-redux";
import {login} from "@/store/auth/actions";
import {UnknownAction} from "redux";

export default function LoginCard() {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({email: '', password: ''})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, selection: 'email' | 'password') => {
        
        switch(selection){
            case 'email' :
                setFormData({...formData, 'email': event.target?.value})
                break;
            case "password":
                setFormData({...formData, 'password': event.target?.value})
                break;
        }

    }

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        dispatch(login(formData) as unknown as UnknownAction)
    }

    return (
        <>
        <form onSubmit={onSubmit} className="p-5 rounded-xl shadow w-96 grid grid-cols-1 space-y-5 bg-white dark:bg-black">
            <h2 className="font-bold text-xl w-full">Login</h2>

            <input
                type="text"
                placeholder="Your email"
                className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 focus:outline-0"
                value={formData.email}
                onChange={ (e)=>{ handleInputChange(e, 'email') }}
            />

            <input 
                type="password" 
                placeholder="password" 
                className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 focus:outline-0"
                value={formData.password}
                onChange={ (e)=>{ handleInputChange(e, 'password') }}
            />

            <div>
                <button type="submit" className="bg-blue-400 dark:bg-blue-900 p-2 rounded float-end">
                    login
                </button>
            </div>
        </form>
        </>
    );
}
