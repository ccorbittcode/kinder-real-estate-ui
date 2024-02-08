import * as React from 'react';
import PropertyCard from './PropertyCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'

export default function PropertyCardStack() {
    const [properties, setProperties] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperties() {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/properties`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const properties = await response.json();
            setProperties(properties);
        }
        getProperties();
        return;
    }, [properties.length]);
    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            backgroundImage: 'linear-gradient(#24c5f3, white)'
        }}
        >
            <Divider variant="middle" sx={{mt: 1}}/>
            <Typography variant="h4" sx={{ m: 2 }}>
                Featured Properties
            </Typography>
            <Grid container spacing={2}>
            {
                        properties.slice(0,4).map((property, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={property} />
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </Box>
    );
}
