import { useState, useEffect } from 'react';
import { AuthContext, defaultAuthState } from '../contexts/AuthContext';
import { authApi } from '../lib/api/authApi';
import { getStoredUser } from '../lib/utils/storageUtils';

export function AuthProvider({ children }) {
  const [state, setState] = useState(defaultAuthState);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const storedUser = getStoredUser();
      if (storedUser) {
        setState(prev => ({ ...prev, user: storedUser }));
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  const handleAuthError = (error) => {
    setState(prev => ({
      ...prev,
      error: error.message,
      loading: false
    }));
    throw error;
  };

  const signIn = async (email, password) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { user } = await authApi.login(email, password);
      setState(prev => ({ ...prev, user, loading: false }));
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signUp = async (userData) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const { user } = await authApi.register(userData);
      setState(prev => ({ ...prev, user, loading: false }));
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signOut = async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      await authApi.logout();
      setState({ ...defaultAuthState, loading: false });
    } catch (error) {
      console.error('Logout error:', error);
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  const clearError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  const value = {
    ...state,
    signIn,
    signUp,
    signOut,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}