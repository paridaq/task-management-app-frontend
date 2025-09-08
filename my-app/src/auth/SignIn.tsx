import { useState } from "react";


function SignIn(){
    const[email,setEmail]= useState<string>("");
    const[password,setPassword] = useState<string>("");


    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return(

        <>
        <h2>signin page</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">email</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="text" />
            <button type="submit">SignIn</button>
        </form>
        
        </>
    )
}

export default SignIn;