import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                height: '80px',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                component="img"
                src="/logo192.png"
                alt="Logo"
                sx={(theme) => ({
                    height: '40px',
                    width: 'auto',
                    marginRight: theme.spacing(1),
                })}
            />
            <Typography variant="h3" component="div">
                Mini Anime Search App
            </Typography>
        </Box>   
    );
}