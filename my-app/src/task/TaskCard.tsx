import { useNavigate } from "react-router";


function TaskCard() {
    // Example tech stack
    const techStack = ["React", "Spring Boot", "MySQL"];

    const navigate = useNavigate();

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
                    src=""
                    alt="Task"
                    style={{ width: "64px", height: "64px", borderRadius: "6px" }}
                />
            </div>
            {/* Right: Details */}
            <div style={{ flex: 1 }}>
                <p style={{ margin: 0, color: "#666", fontSize: "1rem" }}>
                    Task description goes here. This is a sample description for the task.
                </p>
                <h3 style={{ margin: "12px 0 0 0", fontSize: "1.15rem", color: "#222" }}>
                    Task Title
                </h3>
                <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
                    {techStack.map((tech) => (
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
                <div style={{display:"flex", marginRight:"10px", gap:"20px"}}>
                      <a href="" onClick={()=>navigate("/assign")}>Assign</a>
                      <a href="" onClick={()=>navigate("/submissions")}>Submissions</a>
                      <a href="" onClick={()=>navigate("/edittask")}>Edit </a>
                      <a href="">Delete</a>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;