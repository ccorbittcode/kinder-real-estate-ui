import * as React from 'react'
import './Properties.css'
import PropertyList from '../components/PropertyList'
import { Typography } from '@mui/material'
import ContactForm from '../components/ContactForm'
import Divider from '@mui/material/Divider'

export default function Properties() {
    return (
        <div className='properties-main'>
            <Typography variant="h4" sx={{ m: 2, pt: 3, textAlign: "center" }}>
                Current Listings
            </Typography>
           <PropertyList />
           <Divider variant="middle" sx={{ mt: 4, mb: 4 }} />
           <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                Contact Us
            </Typography>
            <Typography variant="h6" sx={{ m: 2, textAlign: "center" }}>
                See something you like? Contact us today!
            </Typography>
           <ContactForm />
        </div>
    )
}
