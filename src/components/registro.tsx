import React, { useState } from 'react';
import { AuthService } from '../environments/AuthService'
import { GenericService } from '../environments/generic.service';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.jpg';


const authService = new AuthService();

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [cedula, setCedula] = useState("");
    const validarNombre = (nombre:any) => {
        const regexNombre = /^[A-Za-z]+$/;

        if (!regexNombre.test(nombre)) {
            alert("El nombre solo debe contener letras");
            return false;
        }

        return true;
    };

    const validarApellidos = (apellidos:any) => {
        const regexApellidos = /^[A-Za-z]+$/;

        if (!regexApellidos.test(apellidos)) {
            alert("Los apellidos solo deben contener letras");
            return false;
        }

        return true;
    };

    const validarTelefonoCedula = (valor:any, campo:any) => {
        const regexNumeros = /^[0-9]+$/;

        if (!regexNumeros.test(valor)) {
            alert(`El campo ${campo} solo debe contener números`);
            return false;
        }

        return true;
    };
    const validarCorreo = (correo:any) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(correo)) {
            alert("Correo electrónico no válido");
            return false;
        }

        return true;
    };
    const validarContraseña = (contraseña:any) => {
        // Agrega tus propias reglas para la contraseña, por ejemplo, longitud mínima
        if (contraseña.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return false;
        }

        return true;
    };
    const handleRegister = async () => {
        try {
            if (
                !validarNombre(nombre) ||
                !validarApellidos(apellidos) ||
                !validarTelefonoCedula(telefono, 'teléfono') ||
                !validarTelefonoCedula(cedula, 'cédula') ||
                !validarCorreo(correo) ||
                !validarContraseña(contraseña)
            ) {
                return;
            }
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
            console.log("Usuario registrado exitosamente", registroResponse);
            alert("Registro exitoso");
        } else {
            console.log("Usuario no registrado");
            alert("Error al registrar usuario");
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error en el registro");
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
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center font-sans mt-8">
          <img src={Logo} alt="Asomameco logo" className="w-60 h-28 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Bienvenido a ASOMAMECO</h1>
            <p className="text-sm text-gray-500 mb-4">Tu puerta a un mundo de apoyo, comunidad y oportunidades</p>
      
            <label htmlFor="cedula" className="block text-gray-700 text-base font-bold mb-2">Cédula:</label>
            <input
              type="text"
              id="cedula"
              value={cedula}
              onChange={handleCedulaChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      
            <label htmlFor="nombre" className="block text-gray-700 text-base font-bold mb-2">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      
            <label htmlFor="apellidos" className="block text-gray-700 text-base font-bold mb-2">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              value={apellidos}
              onChange={handleApellidosChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      
            <label htmlFor="correo" className="block text-gray-700 text-base font-bold mb-2">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={handleCorreoChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      
            <label htmlFor="contraseña" className="block text-gray-700 text-base font-bold mb-2">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={handleContraseñaChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      
            <div className="flex items-center justify-between mb-4">
            <button
            type="button"
            onClick={handleRegister}
            className="bg-orange-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded focus:outline-none"
          >
            Registrarse
          </button>
      
              <p className="text-gray-700 text-base">¿Ya tiene cuenta? <a href="/login" className="text-orange-500">Iniciar sesión</a></p>
            </div>
          </div>
        </div>
      );
      
      
      
    ;
};

export default Registro;