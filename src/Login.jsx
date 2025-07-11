import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === '123456') {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="container" style={{ maxWidth: '300px', margin: '50px auto',  
            margin: '20px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'aquamarine',
            color: 'white',
            padding: '20px',
            borderRadius: '10px'}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={{ marginTop: '10px' }}>
            Log-In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
