import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PertolonganTerdekat from "./pages/PertolonganTerdekat"
import KonsultasiUser from "./pages/KonsultasiUser"
import KonsultasiDone from "./pages/KonsultasiDone"
import Testimoni from "./pages/Testimoni"
import ManageKonsultasi from "./pages/ManageKonsultasi"
import TestimoniAdmin from "./pages/TestimoniAdmin"



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/user" element={<UserDashboard/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/pertolongan-terdekat" element={<PertolonganTerdekat/>}/>
      <Route path="/konsultasi" element={<KonsultasiUser/>}/>
      <Route path="/done" element={<KonsultasiDone/>}/>
      <Route path="/testimoni" element={<Testimoni/>}/>
      <Route path="/manage-konsultasi" element={<ManageKonsultasi/>}/>
      <Route path="/testimoni-admin" element={<TestimoniAdmin/>}/>


    </Routes>
    </BrowserRouter>
  )
}
