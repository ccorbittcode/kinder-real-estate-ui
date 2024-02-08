import * as React from "react";
import PropertyTypeSelector from "./PropertyTypeSelector";
import { Box } from "@mui/material";
import TextInput from "./TextInput";
import "./SearchForm.css"
import Grid from "@mui/material/Grid";
import SelectInput from "./SelectInput";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const priceOptions = [
    { type: "Price", value: 100000, label: "$100,000" },
    { type: "Price", value: 250000, label: "$250,000" },
    { type: "Price", value: 500000, label: "$500,000" },
    { type: "Price", value: 750000, label: "$750,000" },
    { type: "Price", value: 1000000, label: "$1,000,000" },
    { type: "Price", value: 5000000, label: "$5,000,000" },
    { type: "Price", value: 10000000, label: "$10,000,000" },
    { type: "Price", value: 50000000, label: "$50,000,000" },
    { type: "Price", value: 100000000, label: "$100,000,000" },
]

const bedOptions = [
    { type: "Bedrooms", value: 1, label: "1" },
    { type: "Bedrooms", value: 2, label: "2" },
    { type: "Bedrooms", value: 3, label: "3" },
    { type: "Bedrooms", value: 4, label: "4" },
    { type: "Bedrooms", value: 5, label: "5" },
    { type: "Bedrooms", value: 6, label: "6" },
    { type: "Bedrooms", value: 7, label: "7" },
    { type: "Bedrooms", value: 8, label: "8" },
    { type: "Bedrooms", value: 9, label: "9" },
    { type: "Bedrooms", value: 10, label: "10" },
]

const bathOptions = [
    { type: "Bathrooms", value: 1, label: "1" },
    { type: "Bathrooms", value: 2, label: "2" },
    { type: "Bathrooms", value: 3, label: "3" },
    { type: "Bathrooms", value: 4, label: "4" },
    { type: "Bathrooms", value: 5, label: "5" },
    { type: "Bathrooms", value: 6, label: "6" },
    { type: "Bathrooms", value: 7, label: "7" },
    { type: "Bathrooms", value: 8, label: "8" },
    { type: "Bathrooms", value: 9, label: "9" },
    { type: "Bathrooms", value: 10, label: "10" },
]

const cityOptions = [
    { type: "City", value: "Akumal", label: "Akumal" },
    { type: "City", value: "Cancun", label: "Cancun" },
    { type: "City", value: "Paamul", label: "Paamul" },
    { type: "City", value: "Playa del Carmen", label: "Playa del Carmen" },
    { type: "City", value: "Puerto Aventuras", label: "Puerto Aventuras" },
    { type: "City", value: "Puerto Morelos", label: "Puerto Morelos" },
    { type: "City", value: "Tulum", label: "Tulum" },

]


export default function SearchForm() {
    const navigate = useNavigate();
    const [rentOrSale, setRentOrSale] = useState("");
    const [city, setCity] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [price, setPrice] = useState("");
    const [keyword, setKeyword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/search?rentOrSale=${rentOrSale}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&price=${price}&keyword=${keyword}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            navigate('/results', { state: { results: data } });
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <div className="searchform" >
            <form onSubmit={handleSubmit}>
                <PropertyTypeSelector active={rentOrSale} setActive={setRentOrSale}/>
                <Box sx={{ m: 2, mt: 0, p: 1.5, pr: 3.5, pb: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} md={4}>
                            <SelectInput value={city} options={cityOptions} onChange={(e) => setCity(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput value={bedrooms} options={bedOptions} onChange={(e) => setBedrooms(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput value={bathrooms} options={bathOptions} onChange={(e) => setBathrooms(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput value={price} options={priceOptions} onChange={(e) => setPrice(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextInput labelText="Keyword" onChange={(e) => setKeyword(e.target.value)} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Button
                                type="submit"
                                sx={{ m: 1, p: 2, width: '100%' }}
                                variant="contained"
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}
