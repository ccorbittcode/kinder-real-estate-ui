import React from 'react';
import { useState } from 'react';
import PopUpSnackbar from './PopUpSnackbar';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    return (
        <UserContext.Provider value={{ user, setUser, snackbarOpen, setSnackbarOpen, showSnackbar }}>
            {children}
            <PopUpSnackbar
                open={snackbarOpen}
                handleClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
            />
        </UserContext.Provider>
    );
}
