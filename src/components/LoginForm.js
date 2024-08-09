import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de inicio de sesión:', credentials);
    // Manejo del inicio de sesión
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={credentials.email} 
          onChange={handleChange} 
          placeholder="ingresa tu correo "
        />
      </div>



      <div>
        <label>Contraseña:</label>
        <input 



          type="password" 
       name="password" 
      value={credentials.password} 
  onChange={handleChange} 
          placeholder="ingresa tu contraseña"
        />
      </div>
      <button type="submit">Inicia sesi'on </button>
    </form>
  );
};

export default LoginForm;
