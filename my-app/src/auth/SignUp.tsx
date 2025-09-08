import { useState } from "react";


function SignUp(){

    const [fullName,setFullName] = useState<string>("")
    const[emeail,setEmail] = useState<string>("")
    const[passowrd,setPassword] =  useState<string>("");
    const[role,setRole] = useState<string>("");

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            
        } catch (error) {
            console.log(error);
        }
    }


    return(

        <>
        <h3>signup page</h3>
        <form onSubmit={handleSubmit}>

            <label htmlFor="">fullname</label>
            <input type="text" />
            <label htmlFor="">email</label>
            <input type="text" />
            <label htmlFor="">password</label>
            <input type="text" />
            <label htmlFor="">role</label>
            <input type="text" />
           <button type="submit">submit</button>
        </form>
        
        </>
    )
}
export default SignUp;