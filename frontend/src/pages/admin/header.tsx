import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";
import LogoUpload from "@/components/header/logoUpload";

function HeaderPage(){
    return (
        <>
            <LogoUpload />
        </>
    );
}

export default protectedRouteCheck(SideBar(HeaderPage))