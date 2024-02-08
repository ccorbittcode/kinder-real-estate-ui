import * as React from 'react';
import "./PropertyTypeSelector.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



export default function PropertyTypeSelector({active, setActive}) {

  const handleChange = (event) => {
    setActive(event.currentTarget.value);
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="button group"
      className="button-group"
      sx ={{backgroundColor: "#ffffff", border: "0px", ml: 4, mr: 4, mt: 3, mb: 0}}
    >
      <Button
        value=""
        onClick={handleChange}
        className="button"
        sx={{ backgroundColor: active === "" ? "#000000" : "#333333" }}
      >
        All
      </Button>
      <Button
        value="rental"
        onClick={handleChange}
        className="button"
        sx={{
          backgroundColor: active === "rental" ? "#000000" : "#333333",
          border: "0px",
         }}
      >
        For Rent
      </Button >
      <Button
        value="sale"
        onClick={handleChange}
        className="button"
        sx={{
          backgroundColor: active === "sale" ? "#000000" : "#333333",
          border: "0px",
        }}
      >
        For Sale
      </Button>
    </ButtonGroup>
  );
}
