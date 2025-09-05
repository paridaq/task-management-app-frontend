import Home from './home/Home'
import NavBar from './navbar/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", width: "100%", height: "calc(100vh - 60px)" }}>
        
        <div style={{ flex: 1 }}>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
