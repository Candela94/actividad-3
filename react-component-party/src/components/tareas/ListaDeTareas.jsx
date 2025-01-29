


import { Tarea } from "./Tarea";




export const ListaDeTareas = ({tareas}) => {
    return(
        <>
        
        <h2>Mi lista de tareas</h2>

        <ul>
            {
                tareas.map(tarea =>  (

                    <ul>

                       <li> <Tarea key={tarea.id} nombre={tarea.nombre} /> </li>

                    </ul>

                ))
            }
        </ul>
      
        
        </>
    )
}