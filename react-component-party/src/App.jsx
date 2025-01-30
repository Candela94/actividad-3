import { useState } from 'react'
import './css/App.css'
import { TarjetaUsuario } from './components/TarjetaUsuario'

import {ListaDeTareas} from './components/tareas/ListaDeTareas'

import { PerfilUsuario } from './components/PerfilUsuario'

import { GaleriaImagenes } from './components/GaleriaDeImagenes'

import { BlogPost } from './components/BlogPost'

import { AlertBox } from './components/AlertBox'



const tareas = [

  { id: 1, nombre: 'Estudiar React', completada: true },
  { id: 2, nombre: 'Leer un libro', completada: false },
  { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
  { id: 4, nombre: 'Aprender a cocinar', completada: true },
  { id: 5, nombre: 'Ver series', completada: false },
  { id: 6, nombre: 'ir un día a la nieve', completada: false }


];



const userData = {
  nombre: 'El Barto',
  email: 'elbarto@fox.com',
  img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
  direccion: {
    calle: 'Calle Falsa 123',
    ciudad: 'Springfield',
    codigoPostal: '12345'
  }
};



const imageList = [
  { src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg;', alt: 'Rick Sanchez' },

  { src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg;', alt: 'Morty Smith' },

  { src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg;', alt: 'Summer Smith' },
];


const status = {
warning: "orange",
error: "red",
success:"green",
}




function App() {
  const [count, setCount] = useState(0)



  return (
    <>

      {/* Ejercicio 1 */}

      <TarjetaUsuario nombre="María" edad={20} ocupacion="Estudiante" />
      <TarjetaUsuario nombre="Pablo" edad={56} ocupacion="Profesor" />
      <TarjetaUsuario nombre="Luna" edad={39} ocupacion="Veterinaria" />


      {/* Ejercicio 2 */}
      {/* <ListaDeTareas  tareas={tareas}/> */}


      {/* Ejercicio 3 */}
      {/* <PerfilUsuario {...userData} /> */}



      {/* Ejercicio 4 */}
      <GaleriaImagenes imageList={imageList}/>


      {/* Ejercicio 5 */}
      <BlogPost nombre='BBK Live Festival' autor='Maria Martinez' fecha= '24-06- 2023'> 
      </BlogPost>


    {/* Ejercicio alert box */}
    <AlertBox status="error">Este es mi mensaje de error</AlertBox>
    <AlertBox status="success">Este es mi mensaje de confirmación</AlertBox>
    <AlertBox status="warning">Este es mi mensaje de warning</AlertBox>

    </>
  )
}

export default App
