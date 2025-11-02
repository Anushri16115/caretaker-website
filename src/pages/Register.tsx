import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient'); // 'patient' or 'caretaker'
  const navigate = useNavigate();


  const handleSuccessfulRegistration = (user: any) => {
    if (userType === 'patient') {
      navigate('/patient-dashboard');
    } else {
      navigate('/caretaker-dashboard');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        role: userType,
      });
      alert(`Successfully created a ${userType} account!`);
      handleSuccessfulRegistration(user);
    } catch (error: any) {
      console.error('Error signing up:', error);
      alert(`Failed to create an account: ${error.message}`);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Save user role to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        role: userType,
      });
      alert(`Successfully created a ${userType} account with Google!`);
      handleSuccessfulRegistration(user);
    } catch (error) {
      console.error('Error signing up with Google:', error);
      alert('Failed to sign up with Google. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="card login-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp}>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>I am a...</label>
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="caretaker">Caretaker</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>

        <div className="social-login-divider">OR</div>

        <button type="button" className="btn btn-google" onClick={handleGoogleSignUp}>
          Sign up with Google
        </button>

        <div className="create-account-link">
          <span>Already have an account? </span>
          <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
}
