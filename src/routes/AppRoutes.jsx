import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  About,
  CreateEvent,
  Dashboard,
  LandingPage,
  Login,
  Settings,
  SignUp,
  UserProfile
} from '../pages';

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-event" element={user ? <CreateEvent /> : <Navigate to="/login" />} />
      <Route path="/settings" element={user ? <Settings /> : <Navigate to="/login" />} />
      <Route path="/profile" element={user ? <UserProfile /> : <Navigate to="/login" />} />
    </Routes>
  );
}