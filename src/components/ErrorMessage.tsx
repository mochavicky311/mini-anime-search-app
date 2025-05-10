import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface ErrorMessageProps {
    message_title?: string;
    message_text: string;
    show_back_home?: boolean;
}

export default function ErrorMessage(props: ErrorMessageProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
                textAlign: 'center',
                padding: '1rem',
                color: 'text.primary',
            }}
        >
            {props.message_title &&
                <Typography variant="h1" component="h1" gutterBottom>
                    {props.message_title}
                </Typography>
            }
            <Typography variant="body1" gutterBottom>
                { props.message_text }
            </Typography>
            {props.show_back_home &&
                <Link href="/" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    Go back to Home
                </Link>
             }
        </Box>
    )
}
