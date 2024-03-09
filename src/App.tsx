import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/home/:correo" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
