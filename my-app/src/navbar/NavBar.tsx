import { use, useActionState, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";


function NavBar(){
    const navigate = useNavigate();
    const[fullName,setFullName]= useState<string>("");
   
    // If you need to use setJwt from AuthContext, destructure it here
     const { jwt } = useContext(AuthContext) ?? { jwt: ""};  
     const {setJwt}= useContext(AuthContext) ?? {setJwt:()=>{}}
     
     const userProfile=async()=>{
        try {
            const response = await fetch(`http://localhost:5000/api/user/profile`,{
             method:"GET",
             headers:{
                "Authorization":`Bearer ${jwt}`,
                "Content-Type":"application/json"
             }
        });
        const result = await response.json();
        console.log(result);
        setFullName(result.fullName);
        setJwt(jwt);
        
        } catch (error) {
            console.log(error)
        }
     }

     useEffect(()=>{
        if(jwt){
            console.log(jwt)
            userProfile();
        }
     },[jwt])
     

     

    return(
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100vw",
                    height: "60px",
                    background: "#f5f5f5",
                    padding: "0 32px",
                    boxSizing: "border-box",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    border:'1px solid #1976d2'
                }}
            >
                {/* Left side */}
                <h3 style={{ margin: 0, color:"blue" }}>task management app</h3>

                {/* Right side */}
                <div>
                    <div>
                    {jwt ? (
                        <div>
                            <h3>{fullName}</h3>
                        </div>
                    ):( 
                        
                         <div>
                            <a  style={{ marginRight: "16px" }} onClick={()=>navigate("/signin")}>signIn</a>
                        <a  onClick={()=>navigate("/signup")}> signUp</a>
                        </div>
                    )}
                    
                    </div>
                </div>
            </div>
            {/* Spacer to prevent content being hidden behind navbar */}
            <div style={{ height: "60px" }} />
        </>    
    )
}

export default NavBar;