import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/check`, {credentials: 'include'});

      if (!response.ok) {
        const text = await response.text();
        console.error('Unexpected response:', text);
        return;
      }

      const data = await response.json();

      setIsAuthenticated(data.isAuthenticated);
      setIsLoading(false);

      if (!data.isAuthenticated) {
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return children;
}

export default ProtectedRoute;
