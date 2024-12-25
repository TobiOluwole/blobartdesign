import protectedRouteCheck from "@/utils/protectedRouteCheck";
import SideBar from "@/components/sideBar";
import Carousel from "@/components/home/carousel";

function HomePage(){
    return (
        <>
            <Carousel />
        </>
    );
}

export default protectedRouteCheck(SideBar(HomePage))