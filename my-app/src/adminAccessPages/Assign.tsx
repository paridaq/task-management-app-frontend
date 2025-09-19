import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";


type User={
    id:number;
    email:string;
    role:string;
    fullName:string;
    passwrod:string;
}

function Assign(){
//   type Users=string[];

   // const users:Users=["user1","user2","user3","user4","user5"];
   const auth = useContext(AuthContext);
   const jwt = auth?.jwt;

    const [users,sertUsers]= useState<User[]>([]);
    const [github_link,setGithub_link] = useState<string>("");
    
//task id through localstorage

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

    const assignTask=async(userId:number)=>{
        const id = localStorage.getItem("task_id");
        const task_id = id ? parseInt(id) : null
      try {
          const response = await fetch(`http://localhost:5000/api/tasks/${id}/user/${userId}/assigned`,{
            method:"PUT",
            headers:{
                "Authorization":`Bearer ${jwt}`,
                
            }
          })
          const result = await response.json();
          console.log(result)
      } catch (error) {
        
      }
    }


    

    return (
        <>
        <div style={{ }}>
            <h2>what the fuck</h2>
            <div>
                {users.map((user)=>(
                    <ul key={user.id} style={{display:"flex", gap:"10px"}}>
                       <li>{user.fullName}</li>
                       <button onClick={()=>assignTask(user.id)}>assign</button>
                    </ul>
                
                ))}
            </div>
        </div>

        
        </>
    )
}

export default Assign;