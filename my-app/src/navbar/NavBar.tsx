

function NavBar(){

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
                }}
            >
                {/* Left side */}
                <h3 style={{ margin: 0, color:"black" }}>task management app</h3>

                {/* Right side */}
                <div>
                    <a href="" style={{ marginRight: "16px" }}>signIn</a>
                    <a href="">signUp</a>
                </div>
            </div>
            {/* Spacer to prevent content being hidden behind navbar */}
            <div style={{ height: "60px" }} />
        </>    
    )
}

export default NavBar;