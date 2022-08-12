import { Link } from "react-router-dom";

export default function NavBar(){
    return <div>
        {/* Link permite crear un hipervinculo para navegar en las rutas de la app */}
        <Link to="/">Home</Link> 
        <Link to="/create">Create</Link>
    </div> 
}