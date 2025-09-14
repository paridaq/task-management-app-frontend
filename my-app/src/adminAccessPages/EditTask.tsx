import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";


function EditTask(){
    const [title,setTitle]= useState<string>("");
    const[description,setDescription] = useState<string>("");
    const[image,setImage] = useState<string>("")
    const[tags,setTags]= useState<string>("");
    const[deadline,setDeadline]=useState<Date>(new Date());
    const[loading,setLoading]= useState<Boolean>(true);
const storedId = localStorage.getItem("task_id");
const id = storedId?parseInt(storedId,10):null;
const auth = useContext(AuthContext);

const jwt = auth?.jwt;


// 1-GET-	/id
// getTaskById(id,jwt)   //id for task


const fetchUser=async()=>{
    try {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/tasks/${id}`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${jwt}`,
                "Content-Type":"application/json"
            }
        })
        const result = await response.json();
        console.log(result)
        setTitle(result.title);           //title ,descriptipn,image,tags,deadline,
        setDescription(result.description);
        
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
}

useEffect(()=>{
    if(jwt && id){
        fetchUser()
    }
},[id])

const handleEdit =async()=>{
    

}
    

    return(

        <>
        <h3>task form to edit the task</h3>
         <form onSubmit={handleEdit}>
            <label htmlFor="">titel</label>
            <input type="text"
            value={title} 
            required
            onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="">description</label>
            <input type="text" 
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}/>
            <label htmlFor="">image</label>
            <input type="text" 
            required
            value={image}
            onChange={(e)=>setImage(e.target.value)}/>
            <label htmlFor="">tags</label>
            <input type="text"
            required
            value={tags}
            onChange={(e)=>setTags(e.target.value)} />
            <label htmlFor="">deadline</label>
            <input type="text"
            required
            value={deadline.toISOString().split("T")[0]} 
            onChange={(e)=>setDeadline(new Date(e.target.value))}/>
            <button type="submit">submit</button>
           
        </form>
        
        
        </>
    )
}
export default EditTask;