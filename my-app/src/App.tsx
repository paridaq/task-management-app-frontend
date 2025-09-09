import { Route, Routes } from 'react-router'
import Home from './home/Home'
import NavBar from './navbar/NavBar'
import Assign from './adminAccessPages/Assign'
import Submission from './adminAccessPages/Submissons'
import EditTask from './adminAccessPages/EditTask'
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn'
import CreateTask from './adminAccessPages/CreateTask'


function App() {
  return (
    <>
      <NavBar /> 
       <div style={{ display: "flex", width: "100%", height: "calc(100vh - 60px)" }}>
        
        <div style={{ flex: 1 }}>
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/assign' element={<Assign/>}/>
           <Route path='/submissions' element={<Submission/>}/>
           <Route path='/editTask' element={<EditTask/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/signin' element={<SignIn/>}/>
           <Route path='/createtask' element={<CreateTask/>}/>
          </Routes>
        
        </div> 
       </div>
    </>
  )
}

export default App
