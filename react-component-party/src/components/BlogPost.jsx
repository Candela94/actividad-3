


export const BlogPost = ({nombre, autor, fecha, children}) => {

    return(
        <>
        
        <div className="Blog">
            <h2>
                ¡Bienvenidx a mi blog!
            </h2>
            <p>Hoy quiero hablaros sobre mi experiencia en "{nombre}</p>
        
            <div>{children}</div>

            <p><strong>Nombre:</strong> {autor}</p>
            <p><strong>Fecha:</strong> {fecha}</p>

        </div>


        </>
    )



}