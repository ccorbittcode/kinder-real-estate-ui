import React from "react";
import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropertyCard from "./PropertyCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
    const location = useLocation();
    console.log(location.state);
    const results = location.state.results;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <Box sx={{
            flexGrow: 1,
            mt: 7,
            p: 3,
            backgroundImage: 'linear-gradient(#8ECAE6 , #24c5f3)'
        }}
        >
            <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
                Search Results
            </Typography>
            <Grid container spacing={2}>
                {
                    results.length > 0 ? (
                        results.map((result, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={result} />
                                </Grid>
                            )
                        })
                    ) : (
                        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/tumbleweed.gif" alt="tumbleweed" style={{ width: "20%" }} />
                            <Typography variant="h5" sx={{ textAlign: "center", mt: 3 }}>
                                No results found 😭
                            </Typography>
                                <Button sx={{backgroundColor: "black", mt: 1}} onClick={handleClick}>
                                    Back to Home
                                </Button>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}
