

function HomeBar(){

    return(

        <div
            style={{
                width: '100%',
                height: '100vh',
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    border: '2px dashed #1976d2',
                    borderRadius: '8px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <h1 style={{ color: '#1976d2' }}>Home Component</h1>
            </div>
        </div>
    )
}

export default HomeBar;