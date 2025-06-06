import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";

const EditarPerfil = () => {
  const { auth, actualizarPerfil } = useAuth();

  const [perfil, SetPerfil] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    SetPerfil(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email } = perfil;
    if ([nombre, email].includes("")) {
      setAlerta({
        msg: "El campo Nombre y Email son Obligatorios",
        error: true,
      });
      return;
    }

    const resultado = await actualizarPerfil(perfil);
    setAlerta(resultado);
  };
  const { msg } = alerta;
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-center text-3xl mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}{" "}
        <span className="text-indigo-600 font-bold">Informacion aqui</span>
      </p>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="text-gray-600 font-bold">Nombre</label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-3 rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={(e) =>
                  SetPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 font-bold">Sitio Web</label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-3 rounded-lg"
                name="web"
                value={perfil.web || ""}
                onChange={(e) =>
                  SetPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 font-bold">Telefono</label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-3 rounded-lg"
                name="telefono"
                value={perfil.telefono || ""}
                onChange={(e) =>
                  SetPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label className="text-gray-600 font-bold">Email</label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-3 rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={(e) =>
                  SetPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>
            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 text-white rounded-lg mt-5 w-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
