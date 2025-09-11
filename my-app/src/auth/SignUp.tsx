import { useContext, useState, type FormEvent, type ReactHTMLElement } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";


function SignUp(){
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt ?? "";
    const setJwt = auth?.setJwt ?? (() => {});
    const navigate = useNavigate()

    const [fullName,setFullName] = useState<string>("")
    const[email,setEmail] = useState<string>("")
    const[password,setPassword] =  useState<string>("");
    const[role,setRole] = useState<string>("");

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    const handleSignUp=async(e:FormEvent<HTMLFormElement>)=>{
        const data ={fullName,email,password,role}
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/auth/signup",{
                method:"POST",
                headers:{

                    "Content-Type":"application/json",
                },
                body:JSON.stringify(data)

            })
            if(!response.ok){
                throw new Error("unable to load the result")
            }
            const result = await response.json()
            setJwt(result.jwt)
            navigate("/home")
        } catch (error) {
           console.log(error) 
        }
    }


    return(

        <>
        <h3>signup page</h3>
        <form onSubmit={handleSignUp}>

            <label htmlFor="">fullname</label>
            <input type="text"
            value={fullName || ""}
            required
            onChange={(e)=>setFullName(e.target.value)} />
            <label htmlFor="">email</label>
            <input type="text"
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">password</label>
            <input type="text"
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)} />
            <label htmlFor="">role</label>
            <input type="text"
            value={role} 
            onChange={(e)=>setRole(e.target.value)}/>
           <button type="submit">submit</button>
        </form>
        
        </>
    )
}
export default SignUp;