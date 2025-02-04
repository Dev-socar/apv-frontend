import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
  const { pacientes } = usePacientes()

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente._id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes {""}
            <span className="text-indigo-600">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
