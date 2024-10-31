import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/check`, { credentials: 'include' });

        if (!response.ok) {
          const text = await response.text();
          console.error('Unexpected response:', text);
          setIsLoading(false);
          navigate('/login');
          return;
        }

        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
        setIsLoading(false);

        if (!data.isAuthenticated) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsLoading(false);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
