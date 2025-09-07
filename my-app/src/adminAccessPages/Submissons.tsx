


function Submission(){
    type Submissions=string[];

   const submission:Submissions=["submission1","submissions2"]

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