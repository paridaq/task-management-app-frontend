import HomeBar from "../sidebar/HomeBar";
import SideBar from "../sidebar/SideBar";


function Home(){

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