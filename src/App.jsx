import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/user" element={<UserDashboard/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
