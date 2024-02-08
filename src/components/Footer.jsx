import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Footer.css'
import { createTheme } from '@mui/material/styles';

export default function Footer() {

  return (
    <>
      <Box
        className="footerbox"
        sx={{
          pb: 4,
          textAlign: "center",
          backgroundImage: 'linear-gradient(white,#24c5f3)',
          marginTop: "auto",
        }}
      >
        <Divider variant="middle" sx={{ mt: 4, mb: 4 }} />
        <Typography
          className="footer"
          variant="h7"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Kinder Realty&#169; 2024, No rights reserved.
        </Typography>
      </Box>
    </>
  );
}
