import { useState } from "react";



function Submission(){
    type Submissions=string[];
    const [submissions,setSubmissions]= useState<string[]>([]);


   const submission:Submissions=["submission1","submissions2"]
   

   const fetchSubmissions=()=>{
    const task =
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