


    

        export const GaleriaImagenes = ({imagenes}) => {

            

            return (
                <>
                {imagenes.map((imagen, index) => (

                    <img style={{width:'100px', height: '100px'}} key= {index} src = {imagen.src} alt= {imagen.alt} />


                ))}
            
            </>
        )}