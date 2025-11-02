import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSuccessfulLogin = async (user: any) => {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.role === 'patient') {
        navigate('/patient-dashboard');
      } else if (userData.role === 'caretaker') {
        navigate('/caretaker-dashboard');
      } else {
        // Handle cases where role is not set
        navigate('/');
      }
    } else {
      // Handle cases where user document doesn't exist
      alert('User data not found. Please register first.');
      navigate('/register');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await handleSuccessfulLogin(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Failed to sign in with Google.');
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await handleSuccessfulLogin(userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="card login-form">
        <h2>Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

        <div className="social-login-divider">OR</div>

        <button type="button" className="btn btn-google" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>

        <div className="create-account-link">
          <span>Don't have an account? </span>
          <a href="/register">Create an account</a>
        </div>
      </div>
    </div>
  );
}
