import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import JikanService from '../api/jikan.api';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InfoCard from '../components/InfoCard';
import { AnimeDetail } from '../types/model';
import Loading from '../components/Loading';
import Box from '@mui/material/Box';
import ErrorMessage from '../components/ErrorMessage';
import Typography from '@mui/material/Typography';


const jikanService = new JikanService();

export default function DetailPage() {
    const { id } = useParams<{ id: string }>();
    const [anime, setAnime] = useState<AnimeDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAnimeDetail = async () => {
            if (!id) return;
            setLoading(true);
            setError(null);
            try {
                const response = await jikanService.getAnimeById(parseInt(id));
                setAnime(response);
            } catch (err) {
                console.error('Error fetching anime detail:', err);
                setError('Failed to load anime details.');
            } finally {
                setLoading(false);
            }
        };

        loadAnimeDetail();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message_title="Error" message_text={error} show_back_home={true} />;
    if (!anime) return <ErrorMessage message_text="No anime details available." show_back_home={true} />;

    const infoCards = [
        { primary: anime.score.toString(), secondary: `${anime.scored_by} USERS`, color: 'primary.main', primary_text_color: 'white', secondary_text_color: 'white' },
        { primary: `#${anime.rank}`, secondary: 'RANKED', color: '#8DA5B5', primary_text_color: 'white', secondary_text_color: 'white' },
        { primary: `#${anime.popularity}`, secondary: 'POPULARITY', color: '#5A7282', primary_text_color: 'white', secondary_text_color: 'white' },
        { primary: `#${anime.members}`, secondary: 'MEMBERS', color: 'secondary.main', primary_text_color: 'white', secondary_text_color: 'white' },
    ];

    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', padding: "16px 8px", alignItems: 'center' }}>
            <Grid container
                spacing={1}
                justifyContent="center"
                alignItems="center"    
            >
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={anime.image_url}
                            alt={anime.title}
                            style={{ borderRadius: '16px', width: '100%', maxWidth: '300px', height: 'auto' }} />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} >
                    <Typography variant="h4" component="h3" gutterBottom>
                        Synopsis
                    </Typography>
                    <Typography variant="body1" component="p">
                            {anime.synopsis}
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 2 }}>
                        {infoCards.map((card, index) => (
                            <Grid size={{ xs: 6, md: 3}} key={index}>
                                <InfoCard
                                    primary_info={card.primary}
                                    secondary_info={card.secondary}
                                    color={card.color}
                                    primary_text_color={card.primary_text_color}
                                    secondary_text_color={card.secondary_text_color}
                                />
                            </Grid>
                        ))} 
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ mt: 8, textAlign: 'center' }}>
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
        </Box>
    );
}