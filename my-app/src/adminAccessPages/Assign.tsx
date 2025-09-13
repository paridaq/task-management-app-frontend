import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";


function Assign(){
//   type Users=string[];

   // const users:Users=["user1","user2","user3","user4","user5"];
   const auth = useContext(AuthContext);
   const jwt = auth?.jwt;

    const [users,sertUsers]= useState<string[]>([]);

    const fetchUsers = async()=>{
        try {
            const response= await fetch(`http://localhost:5000/api/user/users`,{
                method:"GET",
                headers:{
                    "Authorization": `Bearer ${jwt}`,
                    "Content-Type":"application/json"
                }
            })
            const result = await response.json();
            console.log(result)
            sertUsers(result);
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(jwt){
            fetchUsers();
        }
    },[jwt])


    

    return (
        <>
        <div style={{ }}>
            <h2>what the fuck</h2>
            <div>
                {users.map((item,)=>(
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