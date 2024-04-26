import React, { useState } from 'react';
import { signUp } from '../server/firebase-auth';  // Adjust this import path if necessary

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password, username, phone);
      alert("Signed up successfully!");
    } catch (error) {
      setError(error.message);
      alert("Failed to sign up: " + error.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default SignUp;
