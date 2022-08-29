const  Portada = () => {
    
    return (
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f431.png" alt="img-avatar"/>
                    <button type="button" class="boton-avatar">
                        <i class="far fa-image"></i>
                    </button>
                </div>
                <button type="button" class="boton-portada">
                    <i class="far fa-image"></i> Cambiar fondo
                </button>
            </div>
        </div>
    )
} 

export default Portada;