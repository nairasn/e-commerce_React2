import './styles.css'
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
    const location = useLocation();
    // const { pathname } = useLocation(); outro modo, menos verboso.

    return (
        <div>
            <Link 
                to="/"
                className={location.pathname === '/' ? 'active' : ''}>
                Home</Link>

                {/* <Link to="/" className={pathname === '/' ? 'active' : ''}>
                Home</Link> UTILIZANDO O PATHNAME - PRA NÃO FICAR REPETINDO O LOCATION. */ }

            <Link 
                to="/users"
                className={location.pathname === '/users' ? 'active' : ''}>
                Usuários</Link>
        </div>
    )
}