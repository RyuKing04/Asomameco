import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GenericService } from './environments/generic.service'

interface Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: number;
  cedula: number;
  contraseña: string;
  idRol: number;
}

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const genericService = new GenericService()

  useEffect(() => {
    genericService.get<Usuario[]>('api/Auth/obtenerUsuarios').then((response) => {
      setUsuarios(response.data)
    })
  }, []) // Se ejecuta solo una vez al cargar el componente

  console.log(usuarios)

  return (
    <>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="reactLogo" />
        <img src={viteLogo} className="App-logo" alt="viteLogo" />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {usuarios.map((usuario) => (
            <div key={usuario.id}>
              <h1>{usuario.nombre}</h1>
              <p>{usuario.apellidos}</p>
              {/* Mostrar otros detalles del usuario si es necesario */}
            </div>
          ))}
        </div>
      </header>
    </>
  )
}

export default App
