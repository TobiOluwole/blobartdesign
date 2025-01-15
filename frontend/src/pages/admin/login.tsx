import LoginCard from "@/components/loginCard";
import Link from "next/link";
import Head from "next/head";

export default function Login(){
    return (
        <>

            <Head>
                <title>{`BLOB ART & DESIGN ADMIN`}</title>
            </Head>
            <div
                className="h-screen w-screen grid place-content-center bg-cover bg-[url('/img/generalBackground.png')]">
                <LoginCard/>
                <Link href="/admin/forgot-password" className="-mt-12 ml-5 w-fit">forgot password...</Link>
            </div>
        </>
    )
}