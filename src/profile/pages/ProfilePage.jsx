import React from 'react'
import "./ProfilePage.css"; 
import ProfilePortada from './ProfilePortada';
import ProfileInfo from './ProfileInfo';
import ListStories from '../../stories/components/ListStories';

const ProfilePage = () => {
  return (
    <section className="seccion-perfil-usuario">
      <ProfilePortada />
      <ProfileInfo />
      <ListStories />
    </section>
  )
}

export default ProfilePage