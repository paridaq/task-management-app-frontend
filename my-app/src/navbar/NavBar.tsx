import { useNavigate } from "react-router";


function NavBar(){
    const navigate = useNavigate();

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
                    <a href="" style={{ marginRight: "16px" }} onClick={()=>navigate("/signin")}>signIn</a>
                    <a href="" onClick={()=>navigate("/signup")}> signUp</a>
                </div>
            </div>
            {/* Spacer to prevent content being hidden behind navbar */}
            <div style={{ height: "60px" }} />
        </>    
    )
}

export default NavBar;