import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Anime } from '../types/model';
import Grid from '@mui/material/Grid';

interface AnimeItemProps {
    anime: Anime;
}
export default function AnimeItem(props: AnimeItemProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/anime/${props.anime.id}`);
    }

    return (
        <Grid size={{ xs:12, sm: 6, md: 4, lg: 3 }}>
            <Card
                sx={{
                    width: "100%",
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                    },
                }}
                onClick={handleClick}
            >
                <CardMedia
                    sx={{ height: 280 }}
                    image={props.anime.image_url}
                    title={props.anime.title}
                />
                <CardContent sx={{ padding: 2 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {props.anime.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
