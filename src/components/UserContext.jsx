import React, { useState, useEffect } from 'react';
import PopUpSnackbar from './PopUpSnackbar';

export const UserContext = React.createContext();

export function UserProvider({ children, initialUser, initialSetUser }) {
    const [user, setUser] = useState(initialUser || null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    useEffect(() => {
        if (initialUser) {
            setUser(initialUser);
        }
    }, [initialUser]);

    return (
        <UserContext.Provider value={{ user, setUser: initialSetUser || setUser, snackbarOpen, setSnackbarOpen, showSnackbar }}>
            {children}
            <PopUpSnackbar
                open={snackbarOpen}
                handleClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
            />
        </UserContext.Provider>
    );
}
