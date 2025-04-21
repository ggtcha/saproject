import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    if (username === 'admin' && password === '1212312121') {
      setRole('admin');
      navigate('/admindashboard');
    } else if (username === 'user' && password === '123123123') {
      setRole('user');
      navigate('/');
    } else {
      alert('ข้อมูลรับรองไม่ถูกต้อง');
    }
  };

  return (
<div className="login-container">
  <div className="login-form-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          placeholder="Enter your username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>

    </div>
  );
};

export default Login;
