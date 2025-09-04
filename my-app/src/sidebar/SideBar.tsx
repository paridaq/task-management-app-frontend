

function SideBar(){

    const menu=[
    {name:"Home",value:"Home",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"DONE",value:"DONE",role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"ASSIGNED",value:"ASSIGNED",role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED",value:"PENDING",role:["ROLE_ADMIN"]},
    {name:"Create New Task",value:"",role:["ROLE_ADMIN"]},
    {name:"Notification",value:"NOTIFICATION",role:["ROLE_CUSTOMER"]}
    ]

    const role = "ROLE_ADMIN";

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
                paddingTop: '60px',
                zIndex: 1000,
                border: '1px solid #1976d2',
            }}
        >
            <h3 style={{ color: '#1976d2', marginBottom: '16px' }}>managemet table</h3>
        </div>
    )
}

export default SideBar;