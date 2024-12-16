import React, { useContext } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../context';
import Footer from '../components/Footer';

const Profile = () => {
  const {user, isAuth, logout} = useContext(AuthContext);

  if (!isAuth) {
    return <h1>Pls log in</h1>
  }

  return (
    <div>
      <Header/>
      <main>
        <div>
          <h1>Profile {user ? user.id : 'Guest'}</h1>
        </div>
        <button onClick={logout}>Logout</button>
      </main>
      <Footer/>
    </div>
  );
};

export default Profile;