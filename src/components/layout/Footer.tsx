import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'background.paper',
                color: 'text.secondary',
                borderTop: '1px solid',
                borderColor: 'divider',
                height: '50px'
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Yew Vicky. All rights reserved.
            </Typography>
        </Box>
    );
};
