import { useRouter } from 'next/router'
import ResetPasswordCard from "@/components/resetPasswordCard";

export default function ResetPassword () {
    const router = useRouter()
    const token = router.query.token as string
    return (
        <>
            <div className="h-screen w-screen grid place-content-center bg-cover bg-[url('/img/generalBackground.png')]">
                <ResetPasswordCard token={token} />
            </div>
        </>
    )
}
