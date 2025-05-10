import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
            }}
        >
            {props.message_title &&
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{ color: 'text.primary' }}
                >
                    {props.message_title}
                </Typography>
            }
            <Typography
                variant="body1"
                gutterBottom
                sx={{ color: 'text.primary' }}
            >
                { props.message_text }
            </Typography>
            {props.show_back_home &&
                <Box sx={{ mt: 4, textAlign: 'left' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/"
                        sx={(theme) => ({
                            padding: '12px 24px',
                            borderRadius: '24px',
                            background: 'secondary.main',
                            color: 'white',
                            '&:hover': {
                                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`
                            }
                        })}
                    >
                        Back to Home
                    </Button>
                </Box>
             }
        </Box>
    )
}
