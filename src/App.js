import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    const userData = localStorage.getItem('user');

    if(authData) {
      setIsAuth(true)
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    setIsAuth(true)
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData)
  }

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      setIsLoading,
      user,
      setUser,
      login,
      logout
    }}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
