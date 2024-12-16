import React, { useContext } from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import MyButtom from '../components/button/MyButton';

const Registration = () => {
  const [data, setData] = useState([]);
  const [loginInput, setLogin] = useState('');
  const [passwordInput, setPassword] = useState('');
  const {login, isAuth} = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [isReg, setIsReg] = useState(true);

  useEffect(() => {
    const fetchDta = async () => {
      const response = await axios.get('/users.json');
      setData(response.data.users)
    }
    fetchDta();
  }, [])

  const checkIt = (e) => {
    e.preventDefault();
    const user = data.find((user) => user.password === passwordInput && user.login === loginInput);

    if (user) {
      login(user)
    } else {setMessage('Login or password is incorrect')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }


  return (
    <main className='regM'>
      <div className="reg_log">
        <div className='form-container'>
        {isReg ? (
          <form onSubmit={e => checkIt(e)} className='reglog'> 
            <h1>Hi, <ins>dude</ins>. Glad to see <ins>you!</ins></h1>
            <div className='formGroup'>
              <label htmlFor='login'>Login</label>
              <input id='login' className='login' type="text" placeholder=" " onChange={e => setLogin(e.target.value)} required/>
            </div>
            <div className='formGroup'>  
              <label htmlFor='password'>Password</label>
              <input id='password' className='password' type="password" placeholder=" " onChange={e => setPassword(e.target.value)} required/>
            </div>
            <div className='btns'>
              <MyButtom className='log_in' type='submit'>Log in</MyButtom>
              <MyButtom className='sign_up' type='button' onClick={() => setIsReg(false)}>Sign up</MyButtom>
            </div>
          </form>
          ) : (          
          <form onSubmit={e => Registration(e)} className='reglog'> 
            <h1>Welcome, <ins>dude</ins>.</h1>
            <div className='formGroup'>
              <label htmlFor='mail'>Mail</label>
              <input id='mail' className='login' type="text" placeholder=" " onChange={e => setLogin(e.target.value)} required/>
            </div>
            <div className='formGroup'>  
              <label htmlFor='password'>Password</label>
              <input id='password' className='password' type="password" placeholder=" " onChange={e => setPassword(e.target.value)} required/>
            </div>
            <div className='btns'>
              <MyButtom className='log_in' type='submit'>Sign up</MyButtom>
              <MyButtom className='sign_up' type='button' onClick={() => setIsReg(true)}>Back to log in</MyButtom>
            </div>
          </form>)}
        </div>
      </div>
      {isAuth ? (
        <Navigate to='/home' />
      ) : (
        message 
          ? <div className={`message active`}>
              {message}
            </div>
          : <div className='message'></div>
      )}
    </main>
  );
};

export default Registration;