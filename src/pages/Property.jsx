import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import './Property.css';
// import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { UserContext } from '../components/UserContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function Property() {
    const [property, setProperty] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { id } = useParams();
    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperty() {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/property/${id}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const property = await response.json();
            setProperty(property); // Set the fetched property
        }
        getProperty();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/property/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            navigate('/properties');
        }
    };

    return (
        <div className="property-main">
            {property && (
                <>
                    <h1 className="header">{property.name}</h1>
                    <h2 className="header">{property.price}</h2>
                    {user &&
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Link to={`/property/${id}/edit`}>
                                <Button variant="contained" sx={{ m: 2 }}>
                                    Edit Property Details
                                </Button>
                            </Link>
                            <Button variant="contained" color="error" onClick={handleDelete} sx={{ m: 2 }}>
                                Delete Property
                            </Button>
                        </Box>
                    }
                    <Grid
                        container
                        className="property-container"
                        spacing="21"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ pt: 2 }}
                    >
                        <Grid item xs={1} md={1} lg={1}></Grid>
                        <Grid item xs={10} md={10} lg={10}>
                            <Box className="carousel-box">
                                {/* <ImageCarousel property={property} /> */}
                            </Box>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}></Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Grid
                                container
                                justifyContent="center"
                                className="property-details-grid"
                            >
                                <Box
                                    className="property-details-box"
                                    sx={{
                                        border: "1px solid black",
                                        borderRadius: 2,
                                        backgroundColor: "white",
                                        m: 1,
                                        mb: 2,
                                        mt: 1,
                                    }}
                                >
                                    <Grid container>
                                        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                                            <h3 className="property-details-header">Property Details</h3>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={6} >
                                            <p><b>Property Type:</b> {property.propertyType}</p>
                                            <p><b>Address:</b> {property.address}</p>
                                            <p><b>City:</b> {property.city}</p>
                                            <p><b>State:</b> {property.state} </p>
                                            <p><b>Postal Code:</b> {property.postalCode}</p>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={6}>
                                            <p><b>Bedrooms:</b> {property.bedrooms}</p>
                                            <p><b>Bathrooms:</b> {property.bathrooms}</p>
                                            <p><b>House Size:</b> {property.squareFeet}</p>
                                            <p><b>Lot Size:</b> {property.lotSize}</p>
                                            <p><b>Year Built:</b> {property.yearBuilt}</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}></Grid>
                        <Grid item xs={10} md={10} lg={10}>
                            <Box
                                className="description-box"
                                sx={{
                                    border: "1px solid black",
                                    borderRadius: 2,
                                    backgroundColor: "white",
                                    m: 5,
                                    mb: 11,
                                    mt: 1,
                                    p: 2,
                                }}
                            >
                                <h3>Description</h3>
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(property.description) }} />

                            </Box>
                        </Grid>
                        <Grid item xs={1} md={1} lg={1}></Grid>
                    </Grid>
                </>
            )}
            <Divider variant="middle" sx={{ mb: 5 }} />
            <Box className="contact-container" sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{
                    className: "contactbox",
                    border: "1px solid black",
                    borderRadius: 2,
                    mb: 10,
                    backgroundColor: "white"
                }}
                >
                    <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                        Lets get in touch!
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "grey", m: 2 }}>
                        Send us your info and we'll get contact you about this property.
                    </Typography>
                    <ContactForm />
                </Box>
            </Box>
        </div>
    )
}
