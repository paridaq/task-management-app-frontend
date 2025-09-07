

function Assign(){
  type Users=string[];

    const users:Users=["user1","user2","user3","user4","user5"];

    

    return (
        <>
        <div style={{ }}>
            <h2>what the fuck</h2>
            <div>
                {users.map((item)=>(
                    <ul key={item} style={{display:"flex", gap:"10px"}}>
                       <li>{item}</li>
                       <button>assign</button>
                    </ul>
                
                ))}
            </div>
        </div>

        
        </>
    )
}

export default Assign;