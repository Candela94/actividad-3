


// 1. Mando el objeto (userData) dentro de PerfilUsuario
// 2. Deconstruimos el objeto

export const PerfilUsuario = ({userData}) => {

    const {nombre,img,email,direccion} = userData;

    const {calle, ciudad, codigoPostal} = direccion; //sacamos las propiedades de mi objeto direccion 

 
    return (
      <>
      <div className="perfilImg">
        <img style={{width: '100px', height: '100px', borderRadius:'50%'}} src= {img} alt={nombre} className="Img" />
        <h3>{nombre}</h3>
        </div>
        <div className="infoPerfil">
            <p>e-mail:{email}</p>
            <p> Direccion: {ciudad}</p>
            <p>{calle},</p>
            <p>{codigoPostal}</p>

        </div>

        </>
    )
}