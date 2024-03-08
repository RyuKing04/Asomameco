import React, { useState } from 'react';
import { AuthService } from '../environments/AuthService'
import { GenericService } from '../environments/generic.service';
import { Link } from 'react-router-dom';


const authService = new AuthService();

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [cedula, setCedula] = useState("");


    const handleRegister = async () => {
        const usuario = {
           nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contraseña: contraseña,
            cedula: cedula,
            telefono: telefono,

        };

        const registroResponse = await authService.register(usuario);

        if (registroResponse) {
            console.log("Usuario registrado exitosamente",registroResponse);
        } else {
            console.log("Usuario no registrado");
        }
    };

    const handleNombreChange = (e:any) => {
        setNombre(e.target.value);
    };

    const handleApellidosChange = (e:any) => {
        setApellidos(e.target.value);
    };
    const handleCorreoChange = (e:any) => {
        setCorreo(e.target.value);
    };

    const handleContraseñaChange = (e:any) => {
        setContraseña(e.target.value);
    };
    const handleCedulaChange = (e:any) => {
        setCedula(e.target.value);
    };
    const handleTelefonoChange = (e:any) => {
        setTelefono(e.target.value);
    };
    return  (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center font-sans">
                    <label htmlFor="nombre" className="block text-gray-700 text-base font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <label htmlFor="apellidos" className="block text-gray-700 text-base font-bold mb-2">Apellidos:</label>
                    <input
                        type="text"
                        id="apellidos"
                        value={apellidos}
                        onChange={handleApellidosChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <label htmlFor="correo" className="block text-gray-700 text-base font-bold mb-2">Correo electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={handleCorreoChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <label htmlFor="telefono" className="block text-gray-700 text-base font-bold mb-2">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={handleTelefonoChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <label htmlFor="contraseña" className="block text-gray-700 text-base font-bold mb-2">Contraseña:</label>
                    <input
                        type="password"
                        id="contraseña"
                        value={contraseña}
                        onChange={handleContraseñaChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <label htmlFor="cedula" className="block text-gray-700 text-base font-bold mb-2">Cédula:</label>
                    <input
                        type="text"
                        id="cedula"
                        value={cedula}
                        onChange={handleCedulaChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <button
                        type="button"
                        onClick={handleRegister}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none"
                    >
                        Registrarse
                    </button>
                  
                </div>
            </div>
    );
    ;
};

export default Registro;
