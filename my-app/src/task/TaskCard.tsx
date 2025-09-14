import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";



type TaskCardProps={
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

function TaskCard({task}:{task:TaskCardProps}) {
    // Example tech stack
   // const techStack = ["React", "Spring Boot", "MySQL"];

    const navigate = useNavigate();
    
         const admin = import.meta.env.VITE_ADMIN_JWT;
         const auth = useContext(AuthContext);
         const jwt = auth?.jwt;
    
    
    console.log(admin);

    // "id": 2,
    //     "title": "create a chai  website",
    //     "description": "you need to create responsive navbar using angular 17,tailwind css and angular material ,that should contain home,about,login,logout button,userprofile",
    //     "image": "https://www.istockphoto.com/photo/cheeseburger-gm520410807-5",
    //     "assignedUserId": null,
    //     "tags": [],
    //     "deadLine": null,
    //     "createdAt": "2025-09-01T20:46:00.566185",
    //     "status": "DONE"

     localStorage.setItem("task_id",task.id.toString());
    

//      6-DELETE-/id
// deleTask(id)    api/tasks

    

     const handleDelete =async()=>{

        const id = task.id;
        try {
            const response= await fetch(`http://localhost:5000/api/tasks/${id}`,{
                method:"DELETE",
                headers:{
                    "Authorization":`Bearer ${jwt}`,
                    "Content-Type":"application/json"
                }
            })
            const result = await response.json();
            console.log(result)
        } catch (error) {
            console.log(error)
        }
     }
    

    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-start",
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                padding: "24px",
                width: "100%",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                boxSizing: "border-box",
                minHeight: "140px",
            }}
        >
            {/* Left: Image */}
            <div
                style={{
                    width: "80px",
                    height: "80px",
                    background: "#f5f5f5",
                    borderRadius: "10px",
                    marginRight: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={task.image}
                    alt="Task"
                    style={{ width: "64px", height: "64px", borderRadius: "6px" }}
                />
            </div>
            {/* Right: Details */}
            <div style={{ flex: 1 }}>
                <p style={{ margin: 0, color: "#666", fontSize: "1rem" }}>
                  {task.description}
                </p>
                <h3 style={{ margin: "12px 0 0 0", fontSize: "1.15rem", color: "#222" }}>
                    {task.title}
                </h3>
                <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
                    {task.tags.map((tech) => (
                        <span
                            key={tech}
                            style={{
                                background: "#e3f2fd",
                                color: "#1976d2",
                                borderRadius: "6px",
                                padding: "4px 12px",
                                fontSize: "0.92rem",
                                fontWeight: 500,
                                letterSpacing: "0.01em",
                            }}
                        >
                            {tech}
                        </span>
                        
                    ))}
                    
                </div>
                {admin?(
                    <div style={{display:"flex", marginRight:"10px", gap:"20px"}}>
                      <a  onClick={()=>navigate("/assign")}>Assign</a>
                      <a  onClick={()=>navigate("/submissions")}>Submissions</a>
                      <a  onClick={()=>navigate("/edittask")}>Edit </a>
                      <a onClick={handleDelete}>Delete</a>
                </div>
                ):(
                    <div style={{display:"flex",marginRight:"10px",gap:"20px"}}>
                        <button>submit</button>
                    </div>
                )}
                
            </div>
        </div>
    );
}

export default TaskCard;