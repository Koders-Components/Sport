import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === 'harshilkheni200@gmail.com' && password === 'har+123') {
      navigate('/user'); // Redirect to user page
    } else if (email === 'admin' && password === 'admin') {
      navigate('/admin'); // Redirect to admin page
    }
    else if (email === 'ext1' && password === 'ext1') {
      navigate('/ext'); // Redirect to admin page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='btn'>
          <button type='submit'>Login</button>
        </div>
        <div className='slink'>
          <Link to="/Signup">Signup</Link> {/* Updated to use Link */}
        </div>
      </form>
    </div>  
  );
};

export default LoginPage;