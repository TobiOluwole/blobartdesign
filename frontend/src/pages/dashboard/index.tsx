import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";

function Dashboard(){
    return (
        <>
                dashbord body
        </>
    )
}

export default protectedRouteCheck(SideBar(Dashboard))