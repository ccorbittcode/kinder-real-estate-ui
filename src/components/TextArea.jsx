import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea({ labelText, name, value, onChange }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'white', borderRadius: '5px'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                name={name}
                value={value}
                onChange={onChange}
                id="text-area"
                label={labelText}
                multiline
                rows={4}
            />
        </Box>
    )
}
