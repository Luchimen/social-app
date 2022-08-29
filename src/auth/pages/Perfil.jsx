import React from 'react'
import Portada from '../../ui/portada'
import InfoUsuario from '../../ui/InfoUsuario'
import "./perfil.css"; 
import ListStories from '../../stories/components/ListStories';
export const Perfil = () => {
    return (
            <section class="seccion-perfil-usuario">
                <Portada />
                <InfoUsuario />
                <ListStories />
            </section>
    )
}