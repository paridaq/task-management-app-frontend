import { useState } from "react";



function Submission(){
    type Submissions=string[];
    const [submissions,setSubmissions]= useState<string[]>([]);




// 1-GET-	/id
// getTaskById(id,jwt)  requestmapping api/tasks



//----------------------------------------------
//     requestmapping =api/submissions


// 1-POST
//   task_id,github_link,jwt   submittask

   const submission:Submissions=["submission1","submissions2"]
   

   const fetchSubmissions=()=>{


    try {
        
    } catch (error) {
        
    }
   }

    return(
        <>
       <h2>all submissions</h2>
       <div>
        {submission.map((item)=>(
            <ul key={item} style={{display:"flex",gap:"20px"}}>
                <li>{item}</li>
                <button>accept</button>
                <button>decline</button>
            </ul>
        ))}
       </div>
        </>
    )
}
export default Submission;