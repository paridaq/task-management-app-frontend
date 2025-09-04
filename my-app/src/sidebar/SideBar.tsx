

function SideBar(){

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