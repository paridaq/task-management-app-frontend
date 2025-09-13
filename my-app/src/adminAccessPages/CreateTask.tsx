import { useContext, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";



function CreateTask(){
    //titel,description,image,list of tags,deadline
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt;

    const [title,setTitle]= useState<string>("")
    const[description,setDescription]= useState<string>("")
    const[image,setImage]= useState<string>("")
    const[tags,setTags]= useState<string>("");
    const[deadline,setDeadline]= useState<Date>(new Date());

    const handleCreateTask=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
             const tagsArray =tags.split(",").map(tag=>tag.trim()).filter(tag=>tag.length>0)
             const data ={title,description,image,tags:tagsArray,deadline:deadline.toISOString()}
             try{
                const response = await fetch(`http://localhost:5000/api/tasks`,{
                    method:"POST",
               headers:{
                     "Authorization":`Bearer ${jwt}`,
                      "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
           }) 
            if(!response.ok){
                throw new Error("there is no resposne from the api")
            }
           const result =await response.json()
           console.log(result)
           navigate("/");


        } catch (error) {
            console.log(error)
        }
    }

    return (

        <>
        <h2>create task page</h2>
        <form onSubmit={handleCreateTask}>
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
            onChange={(e)=>setTags((e.target.value))} />
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

export default CreateTask;