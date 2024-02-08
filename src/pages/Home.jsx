import * as React from "react";
import ImageSlider from "../components/ImageSlider";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import SearchForm from "../components/SearchForm";
import PropertyCardStack from "../components/PropertyCardStack";
import ContactForm from "../components/ContactForm";
import Divider from "@mui/material/Divider";
import './Home.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
    return (
        <Box className='home'>
            <ImageSlider />
            <Box className='homeheader'>
                <Typography variant="h3">
                    Connecting you with your future
                </Typography>
                <Box className="formbox">
                    <SearchForm />
                </Box>
            </Box>
            <PropertyCardStack />
            <Divider variant="middle" sx={{ mb: 2 }} />
            <Box className="contact-container" sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    className="contactbox"
                    sx={{
                        border: "2px solid grey",
                        borderRadius: "10px",
                    }}
                >
                    <Typography variant="h4" sx={{ m: 2 }}>
                        Lets get in touch!
                    </Typography>
                    <Typography variant="h6" sx={{ color: "grey", m: 2 }}>
                        Send us your info and we'll get in touch with you about your property needs.
                    </Typography>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}
