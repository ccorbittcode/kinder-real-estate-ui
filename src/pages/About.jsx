import { Box } from "@mui/material"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import './About.css'
import ContactForm from "../components/ContactForm"

export default function About() {
    return (
        <Box sx={{ mt: 7.5, backgroundImage: 'linear-gradient(#24c5f3, white)' }}>
            <Typography variant="h2" sx={{ p: 5, textAlign: "center" }}>About Us</Typography>
            <Divider variant="middle" sx={{ mb: 2, mr: 10, ml: 10 }} />
            <Grid container spacing={2} sx={{ p: 3 }}>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={6} md={6} lg={6} sx={{ maxHeight: "600px", mb: 6 }}>
                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%', p: 6 }}>
                        <Typography className="about-text" variant="h4" sx={{mb: 6}}>
                            Our mission is to connect you with your future.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%', p: 6 }}>
                        <Typography className="about-text" variant="h4" sx={{mb: 6}}>
                            We are a real estate company that specializes in helping people find their dream homes.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} lg={6} sx={{ maxHeight: "600px", mb: 6 }}>
                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={6} md={6} lg={6} sx={{ maxHeight: "600px", mb: 6 }}>
                    <img
                        className="about-image"
                        src="https://plus.unsplash.com/premium_photo-1679941667189-76560e683a31?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                        <Typography className="about-text" variant="h4" sx={{mb: 6, ml: 6}}>
                            Our agents are highly trained and experienced in the real estate market.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                        <Typography className="about-text" variant="h4" sx={{mb: 6}}>
                            We are here to help you find your dream home in Riviera Maya.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6} lg={6} sx={{ maxHeight: "600px", mb: 6 }}>
                    <img
                        className="about-image"
                        src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </Grid>
                <Grid item xs={1} md={1} lg={1}></Grid>
            </Grid>
            <Divider variant="middle" sx={{ mb: 6, mr: 10, ml: 10 }} />
            <Box className="contact-container" sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    className="contactbox"
                    sx={{
                        border: "1px solid black",
                        borderRadius: 2,
                        mb: 10,
                        backgroundColor: "white"
                    }}
                >
                    <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                        Contact Us
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: "center", color: "grey", m: 2 }}>
                        Let's start planning your future today.
                    </Typography>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}
