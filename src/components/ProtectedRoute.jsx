import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function ProtectedRoute({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserContext);
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
                setUser(data.user);
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
    }, [navigate, setUser]);

    if (isLoading) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    return user ? children : null;
}

export default ProtectedRoute;
