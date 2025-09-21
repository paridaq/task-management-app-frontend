import { useLocation, useNavigate } from "react-router";
import TaskCard from "../task/TaskCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type HomeBarProps = {
    Tasks: any[];
};
type Task={
    id:number;
    title:string,
    description:string,
    image:string,
    tags:string[],
    deadline:Date
    createdAt:Date;
    status:string;
    assignedUserId:null;

}

function HomeBar() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt;
    const setJwt = auth?.setJwt;
    const [tasks,setTasks]= useState<HomeBarProps[]>([])
    const location  =useLocation();
    


    const fetchTasks=async()=>{
        try {
            const response = await fetch(`http://localhost:5000/api/tasks`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${jwt}`,
                "Content-Type":"application/json"
            }
        })
        const result = await response.json();
        const value = localStorage.getItem("deleted_task_id");
        const Taskid = value? parseInt(value):null;
        if(Taskid){

            setTasks(result.filter((r:Task)=>r.id!=Taskid))
        }
        const params = new URLSearchParams(location.search)
        if(params){
            if(params.get("filter")=="PENDING"){
                const pendingTasks = result.filter((t:Task)=>t.status==="PENDING")
                setTasks(pendingTasks);
            }else if(params.get("filter")=="ASSIGNED"){
                const assignedTasks = result.filter((t:Task)=>t.assignedUserId!=null)
                setTasks(assignedTasks)
            }else if(params.get("filter")=="DONE"){
                const completedTasks = result.filter((task:Task)=>task.status==="DONE")
                setTasks(completedTasks);
            }
        }

         
        
        } catch (error) {
          console.log(error)  
        }
        
        
    }
    const params = new URLSearchParams(location.search);
   const parameter = params.toString()
    
    useEffect(()=>{
        

            if(jwt){
                fetchTasks();
            }
        

    },[jwt])



    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                padding: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    border: '2px dashed #1976d2',
                    borderRadius: '8px',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    {/* {Tasks.map((item, idx) => <span key={idx}><TaskCard /></span>)} */}
                  {tasks.map((task,id) => (
                      <span key={id}><TaskCard  task={task}/></span>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default HomeBar;