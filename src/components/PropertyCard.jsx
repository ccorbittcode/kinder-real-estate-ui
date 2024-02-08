import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import KingBedTwoToneIcon from '@mui/icons-material/KingBedTwoTone';
import BathtubTwoToneIcon from '@mui/icons-material/BathtubTwoTone';

function stripHTML(html) {
  if (!html) {
    return "";
  }
  var text = html.replace(/<br>/g, ' ').replace(/<\/?p>/g, ' ');
  var doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.body.textContent || "";
}

export default function PropertyCard({ property }) {
  const descriptionText = stripHTML(property.description).substring(0, 120);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/property/${property._id}`);
    window.scrollTo(0, 0);
  }
  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      }}
    >
      <CardMedia
        component="img"
        alt="Property Image"
        height="200"
        image={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/v1704205644/${property.images[0]}.png`}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {property.name.length > 35 ? `${property.name.substring(0, 35)}...` : property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descriptionText}...
        </Typography>
      </CardContent>
      <CardContent sx={{display: "flex", direction: "row", alignItems:"flex-end", justifyContent: "space-between"}}>
        <Typography variant="h6" color="green">
          {property.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.city}, {property.state}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", direction: "row", alignItems:"center", justifyContent: "space-between"}}>
        <Link to={`/property/${property._id}`}>
          <Button size="small">Details</Button>
        </Link>
        <Typography variant="body2" color="text.secondary" >
          {property.bedrooms}<KingBedTwoToneIcon /> {property.bathrooms}<BathtubTwoToneIcon />
        </Typography>
      </CardActions>
    </Card>
  );
}
