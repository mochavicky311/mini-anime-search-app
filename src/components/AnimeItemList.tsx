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
        <Box
            sx={(theme) => ({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': {
                    margin: theme.spacing(1),
                    width: {
                        xs: '90%',
                        sm: 600,
                        md: 1200,
                    },
                },
                backgroundColor: theme.palette.background.default,
            })}
        >
            <Grid
                container
                spacing={2}
                justifyContent="flex-start"
                wrap="wrap"
                className="anime-list"
                sx={(theme) => ({
                    padding: theme.spacing(4),
                })}
            >
                {props.animeList.map((anime) => (
                    <AnimeItem key={anime.id} anime={anime} />
                ))}
            </Grid>
        </Box>
    );
}