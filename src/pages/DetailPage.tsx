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
        { primary: anime.score.toString(), secondary: `${anime.scored_by} USERS`, color: 'lightblue', primary_text_color: 'blue', secondary_text_color: 'blue' },
        { primary: `#${anime.rank}`, secondary: 'RANKED', color: 'lightblue', primary_text_color: 'blue', secondary_text_color: 'blue' },
        { primary: `#${anime.popularity}`, secondary: 'POPULARITY', color: 'lightblue', primary_text_color: 'blue', secondary_text_color: 'blue' },
        { primary: `#${anime.members}`, secondary: 'MEMBERS', color: 'lightblue', primary_text_color: 'blue', secondary_text_color: 'blue' },
    ];

    return (
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 8 }}>
            <Grid container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                wrap="wrap"
                className="anime-detail">
                <Grid size={{ xs: 12, md: 4 }}>
                    <img src={anime.image_url} alt={anime.title} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} >
                    <Grid size={{ xs: 12 }} >
                        <h3>Synopsis</h3>
                        <p>{anime.synopsis}</p>
                    </Grid>
                    <Grid size={{ xs: 12 }} >
                        <Grid container spacing={1}>
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
            </Grid>
            <Box sx={{ mt: 4, textAlign: 'left' }}>
                <Button variant="contained" component={Link} to="/">
                    Back
                </Button>
            </Box>
        </Box>
    );
}