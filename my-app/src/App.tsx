import { Route, Routes } from 'react-router'
import Home from './home/Home'
import NavBar from './navbar/NavBar'
import Assign from './adminAccessPages/Assign'


function App() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <div style={{ display: "flex", width: "100%", height: "calc(100vh - 60px)" }}>
        
        <div style={{ flex: 1 }}> */}
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/assign' element={<Assign/>}/>

          </Routes>
        
        {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default App
