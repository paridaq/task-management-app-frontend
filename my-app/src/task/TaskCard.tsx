


function TaskCard(){
    return(

        <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            maxWidth: '400px',
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            {/* Left side: Image */}
            <div style={{
                width: '64px',
                height: '64px',
                background: '#eee',
                borderRadius: '8px',
                marginRight: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Placeholder image */}
                <img
                    src="https://via.placeholder.com/48"
                    alt="Task"
                    style={{ width: '48px', height: '48px', borderRadius: '4px' }}
                />
            </div>
            {/* Right side: Task details */}
            <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Task Title</h3>
                <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '0.95rem' }}>
                    Task description goes here.
                </p>
            </div>
        </div>
    )
}

export default TaskCard;