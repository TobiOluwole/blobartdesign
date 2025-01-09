import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";

function Dashboard(){
    return (
        <>
                WELCOME TO BLOB ART DESIGN DASHBOARD
        </>
    )
}

export default protectedRouteCheck(SideBar(Dashboard))