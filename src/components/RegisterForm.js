import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          placeholder="ingresa tu nombre"
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="ingresa tu correo "
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input 
          type="password" 
        name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="ingresa tu contraseña"
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
