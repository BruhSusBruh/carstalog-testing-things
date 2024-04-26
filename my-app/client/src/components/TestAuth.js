import React, { useState } from 'react';
import { signUp, logIn } from '../server/firebase-auth'; // Adjust this path as needed based on actual file structure

function TestAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await signUp(email, password, username, phone);
      console.log('Signup successful', userCredential.user);
      setError(null);
    } catch (error) {
      console.error('Signup failed', error);
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await logIn(email, password);
      console.log('Login successful', userCredential.user);
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
