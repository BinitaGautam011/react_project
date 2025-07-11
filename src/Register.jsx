import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert(`Registered Successfully!\nName: ${name}\nEmail: ${email}`);
      // You can add logic here to save or send this data to backend
    }
  };

  return (
    <div
             className="container"
              style={{ maxWidth: '300px', margin: '50px auto' ,
        margin: '20px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'aqua',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
    }}>
    <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div >
              
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />

          <button type="submit" style={{ marginTop: '10px' }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
