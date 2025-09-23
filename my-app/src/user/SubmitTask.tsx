import { useContext, useState } from "react"

import type { TaskCardProps } from "../task/TaskCard";
import { AuthContext } from "../context/AuthContext";

function SubmitTask({task}:{task:TaskCardProps}){
    
    const [github_link,setGithub_link]= useState<string>("");
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt;
    


    // requestmapping =api/submissions
// 1-POST  
//   task_id,github_link,jwt   submittask

const handleSubmitTask=async(e:React.InputEvent<HTMLFormElement>)=>{

    e.preventDefault();
    const task_id = task.id;
    try {
        const response = await fetch(`http://localhost:5000/api/submissions?task_id=${task_id}&github_link=${github_link}`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${jwt}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(github_link)
        })
        const result = await response.json();
        console.log(result)
        
    } catch (error) {
        console.log(error);
    }

}


    return(
        <>
        <form action="">
           <label htmlFor="">github_link</label>
            <input type="text" />
        </form>
        </>
    )
}