import React from 'react'
import PropertyCard from './PropertyCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function PropertyList() {
    const [properties, setProperties] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperties() {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/properties/`);
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

    // returns a map over the properties array and displays each property
    return (
        <>
            <Box sx={{
                flexGrow: 1,
                p: 3
            }}
            >
                <Grid container spacing={2}>
                    {
                        properties.map((property, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={property} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}
