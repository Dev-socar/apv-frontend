import { Link } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirpassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirpassword].includes("")) {
      setAlerta({ msg: "Hay Campos Vacios", error: true });
      return;
    }
    if (password !== repetirpassword) {
      setAlerta({ msg: "Los passwords no son iguales", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({ msg: "Longitud de Password Min 6 caracteres", error: true });
      return;
    }

    setAlerta({});

    //Crear el usuario en la API
    try {
      await clienteAxios.post("/veterinarios", {
        nombre,
        email,
        password,
      });

      setAlerta({
        msg: "Cuenta Creada Correctamente, Revisa tu Email",
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu Cuenta y Administra tus {""}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form action="" onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Tu Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Repetir Password
            </label>
            <input
              type="password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Repite tu Password"
              value={repetirpassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Registrar Cuenta"
            className="bg-indigo-700 text-white w-full py-3 px-10 rounded-xl cursor-pointer font-bold mt-5 hover:cursor-pointer md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Ya tienes una cuenta? Inicia Sesion
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password"
          >
            Olvide mi password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
