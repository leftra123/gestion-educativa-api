import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="bg-blue-500 text-white p-5 shadow-lg">
            <Link to="/establecimiento" className="text-2xl font-bold hover:text-white hover:underline">
                <h1>DAEM app</h1>
            </Link>
            <Link to="/establecimiento-crear" className="text-white hover:underline ml-5">
                Crear Establecimiento
            </Link>
        </nav>
    );
}
