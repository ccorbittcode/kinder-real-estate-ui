import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectInput.css'


export default function SelectInput({ options, name, value, onChange }) {

    return (
        <div>
            <FormControl sx={{ m: 1, borderRadius: "5px",backgroundColor: "#ffffff", width: "100%" }}>
                <InputLabel id={`${options[0].type.toLowerCase()}-select-label`}>{options[0].type}</InputLabel>
                <Select
                    name={name}
                    labelId={`${options[0].type.toLowerCase()}-select-label`}
                    id={`${options[0].type.toLowerCase()}-select`}
                    value={value}
                    onChange={onChange}
                    autoWidth
                    label={options[0].type.toLowerCase()}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option) => {
                        return (
                            <MenuItem
                                key={option.label}
                                value={option.value}
                            >
                                <em>{option.label}</em>
                            </MenuItem>
                        )
                    })}
                    </Select>
            </FormControl>
        </div>

    );
}
