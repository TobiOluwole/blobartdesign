import LoginCard from "@/components/loginCard";
import Link from "next/link";

export default function Login(){
    return (
        <>
            <div
                className="h-screen w-screen grid place-content-center bg-cover bg-[url('/img/generalBackground.png')]">
                <LoginCard/>
                <Link href="/src/pages/forgot-password" className="-mt-12 ml-5 w-fit">forgot password...</Link>
            </div>
        </>
    )
}