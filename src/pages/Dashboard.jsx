import React from 'react';
import DashboardTabs from '../components/DashboardTabs';
import { Divider } from '@mui/material';
import './Dashboard.css';


export default function Dashboard() {
    return (
        <div className="dashboardmain">
            <h1>Realtor Dashboard</h1>
            <Divider variant='middle' sx={{mb:0,mt:3}} />
            <DashboardTabs />
        </div>
    )
}
