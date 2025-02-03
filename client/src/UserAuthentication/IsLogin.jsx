import React, { useContext, useEffect } from 'react'
import { Appcontext } from '../Context/Appcontext'
import { useNavigate } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import { toast } from 'react-toastify';

const IsLogin = ({ children }) => {
  const {token,setUserLoginpopup}=useContext(Appcontext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
   
  }, [token]); // Only run when Logindatauser changes

  return <>{token ? <div>{children}</div> :setUserLoginpopup(true) }</>;
};

export default IsLogin;
