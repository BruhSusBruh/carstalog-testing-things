import React, { useState } from 'react';
import { signUp, logIn } from './path_to/firebase-auth'; // Adjust the path as needed

function TestAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password);
      console.log('Signup successful', user);
      setError(null);
    } catch (error) {
      console.error('Signup failed', error);
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const user = await logIn(email, password);
      console.log('Login successful', user);
      setError(null);
    } catch (error) {
      console.error('Login failed', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Test Signup/Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default TestAuth;
