import { useState } from "react";


function SideBar(){


    const[activeMenu,setActiveMenu] = useState<string>("Home");

    type MenuItem = {
        name: string;
        value: string;
        role: string[];
    };

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

    

    return (
        <div
            style={{
                
                left: 0,
                top: 0,
                width: '180px',
                height: '89vh',
                background: '#fff',
                boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '70px',
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
                            onClick={() => setActiveMenu(item.value)}
                        >
                            <a
                                href="#"
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