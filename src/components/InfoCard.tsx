import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface InfoCardProps {
    primary_info: string;
    secondary_info: string;
    color?: string;
    primary_text_color?: string;
    secondary_text_color?: string;
}
export default function InfoCard(props: InfoCardProps) {
    return (
        <Card sx={{ width: 150, backgroundColor: props.color || 'white' }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center', color: props.secondary_text_color || 'text.primary' }}>
                    {props.primary_info}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: props.secondary_text_color || 'text.secondary' }}>
                    {props.secondary_info}
                </Typography>
            </CardContent>
        </Card>
    );
}
