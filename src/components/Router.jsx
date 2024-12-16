import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Registration from '../pages/Registration';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { AuthContext } from '../context';

const Router = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
      return <div>Loading...</div>;
    }
  return (
        isAuth
        ? <Routes>
            <Route path="/" element={<Home />} exact = 'true' />
            <Route path='/profile' element={<Profile/>} exact = 'true'/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
          </Routes>
        :   <Routes>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='*' element={<Navigate to='/registration'/>}/>
          </Routes>
        
  );
};

export default Router;