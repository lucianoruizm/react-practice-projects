import { Link } from "react-router-dom";

export default function NavBar(){
    const linkStyle = {
        padding: "10px",
        display: "block",
        fontSize: "18px",
        textDecoration: "none",
        color: "#f1f1f1",
    }

    const navContainerStyle = {
        background: "#181d28",
        padding: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "center",
    }

    return (
       <div style={navContainerStyle}>
           {/* Link permite crear un hipervinculo para navegar en las rutas de la app */}
           <Link to="/" style={linkStyle}>Home</Link> 
           <Link to="/create" style={linkStyle}>Create</Link>
       </div> 
    )
}