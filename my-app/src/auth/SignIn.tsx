import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";


function SignIn(){
    const[email,setEmail]= useState<string>("");
    const[password,setPassword] = useState<string>("");
    const auth = useContext(AuthContext);
    const jwt = auth?.jwt ?? "" ;
    const setJwt = auth?.setJwt ?? (()=>{})
    const navigate = useNavigate();



    const handleSignin=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const data ={email,password};
        try {
            const response = await fetch(`http://localhost:5000/auth/signin`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const result = await response.json();
            setJwt(result.jwt);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return(

        <>
        <h2>signin page</h2>
        <form onSubmit={handleSignin}>
            <label htmlFor="">email</label>
            <input type="text" 
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">password</label>
            <input type="text"
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">SignIn</button>
        </form>
        
        </>
    )
}

export default SignIn;