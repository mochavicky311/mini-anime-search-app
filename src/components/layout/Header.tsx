import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                height: '60px',
                backgroundColor: 'primary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant="h6" component="div">
                Anime Search App
            </Typography>
        </Box>   
    );
}