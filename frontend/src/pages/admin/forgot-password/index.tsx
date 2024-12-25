import ForgotPasswordCard from "@/components/forgotPasswordCard";

export default function ForgotPassword(){
    return (
        <>
            <div className="h-screen w-screen grid place-content-center bg-cover bg-[url('/img/generalBackground.png')]">
                <ForgotPasswordCard />
            </div>
        </>
    )
}