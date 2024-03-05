import React, { useState } from 'react';
import { AuthService } from '../environments/AuthService'
import { GenericService } from '../environments/generic.service';

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
            console.log("Usuario autenticado");
        } else {
            console.log("Usuario no autenticado");
        }
    };

    const handleCorreoChange = (e) => {
        setCorreo(e.target.value);
    };

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <img src="" alt="Asomameco" />
            <div className="w-full max-w-xs">
                <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
                <input type="email" id="correo" value={correo} onChange={handleCorreoChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                <label htmlFor="contraseña" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
                <input type="password" id="contraseña" value={contraseña} onChange={handleContraseñaChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                <button type="button" onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar sesión</button>
            </div>
        </div>
    );
};

export default Login;
