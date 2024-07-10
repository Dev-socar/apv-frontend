import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const { cerrarSesion } = useAuth();
  return (
    <header className="py-10 bg-indigo-600 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
        <h1 className="text-2xl text-center  text-indigo-100 font-bold">
          Administrador de Pacientes de {""}{" "}
          <span className="text-white font-black">Veterinaria</span>
        </h1>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link
            to="/admin"
            className="text-white text-xl hover:text-indigo-200 transition-all ease-linear"
          >
            Pacientes
          </Link>
          <Link
            to="/admin/perfil"
            className="text-white text-xl hover:text-indigo-200 transition-all ease-linear"
          >
            Perfil
          </Link>

          <button
            type="button"
            className="text-white text-xl hover:text-indigo-200 transition-all ease-linear"
            onClick={cerrarSesion}
          >
            Cerrar Sesion
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
