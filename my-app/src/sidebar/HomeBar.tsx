import TaskCard from "../task/TaskCard";

function HomeBar() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                padding: '0px',
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
                <div>
                    {[1,1,1,1].map((item, idx) => <span key={idx}><TaskCard /></span>)}
                </div>
            </div>
        </div>
    )
}

export default HomeBar;