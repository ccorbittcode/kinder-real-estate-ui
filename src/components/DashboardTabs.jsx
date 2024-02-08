import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DashboardTabs.css';
import { useState } from 'react';
import PropertyAddForm from './PropertyAddForm';
import ChangePassword from './ChangePassword';
import SignupForm from './SignupForm';

export default function DashboardTabs() {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
    }}
      className="dashboard-tabs"
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Add Property" />
        <Tab label="Change Password" />
        <Tab label="Register New Realtor" />
      </Tabs>

      {value === 0 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <PropertyAddForm />
        </div>
      )}

      {value === 1 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <ChangePassword />
        </div>
      )}

      {value === 2 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <SignupForm />
        </div>
      )}
    </Box>
  );
}
