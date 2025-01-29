




export const PerfilUsuario = ({nombre, email, img, direccion}) => {
    const {calle, ciudad, codigoPostal} = direccion;
    console.log(direccion);
    return (
      <>
      <div className="perfilImg">
        <img style={{width: '100px', height: '100px', borderRadius:'50%'}} src= {img} alt="perfil" className="Img" />
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