import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="button-group">
        <button 
      onClick={() => setIsLogin(true)} 
          className={isLogin ? 'active' : ''}
        >
          Iniciar 
       
     </button>
        <button 
          onClick={() => setIsLogin(false)} 
          className={!isLogin ? 'active' : ''}
        >
          Registrarse
        </button>
      
      
      
      
      </div>
      <div className="form-container">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthForm;
