import { useState } from "react"

import type { TaskCardProps } from "../task/TaskCard";

function SubmitTask({task}:{task:TaskCardProps}){
    
    const [github_link,setGithub_link]= useState<string>("");


    // requestmapping =api/submissions
// 1-POST  
//   task_id,github_link,jwt   submittask

const handleSubmitTask=(e:React.InputEvent<HTMLFormElement>)=>{

    e.preventDefault();
    const task_id = task

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