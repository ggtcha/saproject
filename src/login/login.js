import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../images/logo.png';
import cover from '../images/contemporary-house.jpg';

function Login({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า
    setError('');
    if (username === 'admin' && password === '1212312121') {
      setRole('admin');
      navigate('/admindashboard');
    } else if (username === 'user' && password === '123123123') {
      setRole('user');
      navigate('/');
    } else {
      setError('ข้อมูลรับรองไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-cover" style={{ backgroundImage: `url(${cover})` }}>
          <div className="login-cover-text">
            <h3>BAAN TEE DEE</h3>
            <p>Care in Every Step, Turning Dreams into Reality</p>
          </div>
        </div>

        <div className="login-panel">
          <img src={logo} alt="Baan Tee Dee" className="login-logo" />
          <h2>Welcome back</h2>
          <p className="login-subtitle">เข้าสู่ระบบเพื่อใช้งาน</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="login-password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="login-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {error && <div className="login-error" role="alert">{error}</div>}
            <button type="submit" className="login-submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
