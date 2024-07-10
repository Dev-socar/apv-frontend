import usePacientes from "../hooks/usePacientes";

const Paciente = ({ paciente }) => {
  const { setEdicion, eliminarPaciente } = usePacientes();
  const { email, fecha, nombre, propietario, sintomas, _id } = paciente;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="text-indigo-700 mb-2">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="text-indigo-700 mb-2">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="text-indigo-700 mb-2">
        Email:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="text-indigo-700 mb-2">
        Fecha de Alta:{" "}
        <span className="font-normal normal-case text-black">
          {formatearFecha(fecha)}
        </span>
      </p>
      <p className="text-indigo-700">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition-colors hover:cursor-pointer "
          onClick={() => setEdicion(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white rounded-lg hover:bg-red-800 transition-colors hover:cursor-pointer "
          onClick={() => eliminarPaciente(_id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
