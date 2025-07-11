import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Login from './login.jsx'
import Register from './register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Register />
  </StrictMode>
);


