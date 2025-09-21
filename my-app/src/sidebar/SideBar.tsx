import { useContext, useState } from "react";
import {  useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";


function SideBar(){

const navigate = useNavigate();
    const[activeMenu,setActiveMenu] = useState<string>("Home");
    const location = useLocation();
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt;
   

    type MenuItem = {
        name: string;
        value: string;
        role: string[];
    };
    const handleAssigned = ()=>{
        const params = new URLSearchParams(location.search);
        params.set("filter","ASSIGNED");
        params.toString();
         navigate({ pathname: location.pathname, search: params.toString() });
    }
    const handleHome =async()=>{
        const params = new URLSearchParams(location.search)
        params.delete("filter");
        navigate({ pathname: location.pathname })
        // try {
        //     const response = await fetch(`http://localhost:5002/api/tasks`,{
        //         method:"GET",
        //         headers:{
        //             "Authorization":`Bearer ${jwt}`,
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify(data);
        //     })
        // } catch (error) {
        //     console.log(error)
        // }
    }
    const handleNotAssigned =()=>{
        const params = new URLSearchParams(location.search);
        params.set("filter","NOT ASSIGNED");
        navigate({pathname:location.pathname,search:params.toString()});
    }
    const handleDone =()=>{
        const params = new URLSearchParams(location.search);
        params.set("filter","DONE");
        navigate({pathname:location.pathname,search:params.toString()});
    }
//export something here
    const menu: MenuItem[] = [
        { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
        { name: "DONE", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
        { name: "ASSIGNED", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
        { name: "NOT ASSIGNED", value: "PENDING", role: ["ROLE_ADMIN"] },
        { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
        { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] }
    ];

    type Role = {
      role: string;
    };
    const role: Role = { role: "ROLE_ADMIN" };
    const handleLogout=()=>{
        console.log("user logedout")
    }
    // add the priority

    //fetch teh assign tasks
    const fetchTasks =async()=>{
         try {
            const response = await fetch(`http://localhost:5000/api/tasks/user`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${jwt}`
                }
            })
            const result = await response.json();
            console.log(result)
         } catch (error) {
            console.log(error)
         }
    }

    

    return (
        <div
            style={{
                left: 0,
                top: 0,
                width: '180px',
                height: '100vh',
                background: '#fff',
                boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '0px', // changed from 70px
                zIndex: 1000,
                border: '1px solid #1976d2',
            
            }}
        >
            <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}
            >
                <h3 style={{ color: '#1976d2', marginBottom: '16px' }}>management table</h3>
            

            <div>
                {menu
                    .filter(item => item.role.includes(role.role))
                    .map(item => (
                        <div
                            key={item.value}
                            style={{
                                padding: "10px",
                                background: activeMenu === item.value ? "#1976d2" : "transparent",
                                color: activeMenu === item.value ? "#fff" : "#1976d2",
                                borderRadius: "4px",
                                cursor: "pointer",
                                marginBottom: "4px"
                            }}
                            onClick={() =>{ setActiveMenu(item.value);
                                if(item.name=="Create New Task"){
                                    navigate("/createtask")
                                }else if(item.name=="ASSIGNED"){
                                   handleAssigned();
                                }else if(item.name=="Home"){
                                    handleHome();
                                }else if(item.name=="NOT ASSIGNED"){
                                    handleNotAssigned();
                                }else if(item.name=="DONE"){
                                    handleDone();
                                }
                                
                            }
                            }
                        >
                            <a
                                
                                style={{
                                    color: activeMenu === item.value ? "#fff" : "#1976d2",
                                    textDecoration: "none"
                                }}
                                onClick={e => e.preventDefault()}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}

                    <button
                      style={{
                        padding: "10px 32px",
                        background: "#1976d2",
                        color: "#fff",
                        border: "none",
                        borderRadius: "30px",
                        fontSize: "16px",
                        width: "140px",
                        marginTop: "16px",
                        cursor: "pointer"
                      }}
                      onClick={handleLogout}
                    >
                      logout
                    </button>
            </div>


            </div>

            
        </div>
    )
}

export default SideBar;