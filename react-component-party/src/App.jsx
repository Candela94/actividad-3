import { useState } from 'react'
import './css/App.css'
import { TarjetaUsuario } from './components/TarjetaUsuario'









function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    
    {/* Ejercicio 1 */}

    <TarjetaUsuario nombre = "María" edad = {20} ocupacion = "Estudiante"  />
    <TarjetaUsuario nombre= "Pablo" edad={56} ocupacion="Profesor"/>
    <TarjetaUsuario nombre="Luna" edad={39} ocupacion= "Veterinaria"/>


   


    </>
  )
}

export default App
