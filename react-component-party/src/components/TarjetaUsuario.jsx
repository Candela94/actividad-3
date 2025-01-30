

export const TarjetaUsuario = ({ nombre, edad, ocupacion }) => {


   

    return (

        <>
       
            <h2 className="Card-h2">Tarjeta de usuario</h2>
            <p className="Card-p">Me llamo {nombre}</p>

           
            {
                edad && <p className="Card-p">Tengo {edad} años</p>
            }



            <p className="Card-p">Soy {ocupacion}</p>


            



        </>

    );
}