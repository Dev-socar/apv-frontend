import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import DashboardPacientes from "./paginas/DashboardPacientes";
import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";

import { AuthProvider } from "./context/AuthProvider";
import { PacientesProviders } from "./context/PacientesProviders";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProviders>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPacientes />}></Route>
              <Route path="perfil" element={<EditarPerfil/>} />
              <Route path="cambiar-password" element={<CambiarPassword/>} />
            </Route>
          </Routes>
        </PacientesProviders>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
