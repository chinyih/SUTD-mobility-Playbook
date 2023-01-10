// import './App.css';

import MasterLayout from './components/Layout';
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import Public from './components/Public';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { Routes, Route, Navigate } from 'react-router-dom';

import Overview from './features/overview/Overview';
import RequireAuth from './features/auth/RequireAuth';
// import 'dotenv/config'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//  appId: process.env.REACT_APP_FIREBASE_APP_ID,
//  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase and analytics
// getAnalytics(initializeApp(firebaseConfig));

function App() {
  return (
    <Routes>
      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Overview />} />
        </Route>
      </Route>

      {/* Public routes */}
      <Route path="/welcome" element={<Public />} />

      <Route path="/auth">
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
}

export default App;
