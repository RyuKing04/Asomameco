import React, { useState } from 'react';
import { AuthService } from '../environments/AuthService'
import { GenericService } from '../environments/generic.service';
import Logo from '../img/Logo.jpg';
import { Link } from 'react-router-dom';


const authService = new AuthService();


const Login = () => {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    const handleLogin = async () => {
        const usuario = {
            correo: correo,
            contraseña: contraseña
        };

        const usuarioResponse = await authService.login(usuario);

        if (usuarioResponse) {
            console.log("Usuario autenticado", usuarioResponse);
        } else {
            console.log("Usuario no autenticado");
        }
    };

    const handleCorreoChange = (e:any) => {
        setCorreo(e.target.value);
    };

    const handleContraseñaChange = (e:any) => {
        setContraseña(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center font-sans">
            <img src={Logo}  alt="Asomameco logo" className="w-60 h-28 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Bienvenido a ASOMAMECO</h1>
            <p className="text-base text-gray-700 mb-4">Tu puerta a un mundo de apoyo, comunidad y oportunidades</p>
            <label htmlFor="correo" className="block text-gray-700 text-base font-bold mb-2">Correo electrónico:</label>
            <input type="email" id="correo" value={correo} onChange={handleCorreoChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
            <label htmlFor="contraseña" className="block text-gray-700 text-base font-bold mb-2">Contraseña:</label>
            <input type="password" id="contraseña" value={contraseña} onChange={handleContraseñaChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
            <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <input type="checkbox" id="recuerdame" className="mr-2" />
                <label htmlFor="recuerdame" className="text-base text-gray-700">Recuérdame</label>
            </div>
            <button
                type="button"
                onClick={handleLogin}
                className="bg-orange-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded focus:outline-none"
            >
                Ingreso
            </button>
            </div>
            <p className="text-sm text-gray-500 mb-2"><Link to="/registro">¿No tienes usuario? Regístrate</Link></p>
            <p className="text-sm text-gray-500 mb-6"><a href="#">Olvidé mi contraseña</a></p>
        </div>
        </div>
    );
};

export default Login;
