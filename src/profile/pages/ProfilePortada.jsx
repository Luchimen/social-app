const  ProfilePortada = () => {
    
    return (
        <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f431.png" alt="img-avatar"/>
                    <button type="button" className="boton-avatar">
                        <i className="far fa-image"></i>
                    </button>
                </div>
                <button type="button" className="boton-portada">
                    <i className="far fa-image"></i> Cambiar fondo
                </button>
            </div>
        </div>
    )
} 

export default ProfilePortada;