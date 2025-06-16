import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './Authroute.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyAmLb-DTarx7p_IqR-aa5NL-54mRNvxK-c",
  authDomain: "authentication-189d5.firebaseapp.com",
  projectId: "authentication-189d5",
  storageBucket: "authentication-189d5.firebasestorage.app",
  messagingSenderId: "337663576422",
  appId: "1:337663576422:web:e58eb227e12ce4f0bfa0a7"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
