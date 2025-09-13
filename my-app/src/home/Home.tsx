import { useLocation } from "react-router";
import HomeBar from "../sidebar/HomeBar";
import SideBar from "../sidebar/SideBar";


function Home(){
    const location = useLocation();



    return (
        <>
        <div
        style={{display:"flex"}}>

        <SideBar/>
        <HomeBar/>
        </div>
        </>
    )
}

export default Home;