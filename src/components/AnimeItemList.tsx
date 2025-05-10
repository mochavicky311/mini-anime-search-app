import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AnimeItem from '../components/AnimeItem';
import { Anime } from '../types/model';

interface AnimeItemListProps {
    animeList: Anime[];
}
export default function AnimeItemList(props: AnimeItemListProps) {
    return (
        <Box sx={{ margin: '0 auto' }}>
            <Grid container
                spacing={2}
                justifyContent="flex-start"
                wrap="wrap"
                className="anime-list"
            >
                {props.animeList.map((anime) => (
                    <AnimeItem key={anime.id} anime={anime} />
                ))}
            </Grid>
        </Box>
    );
}