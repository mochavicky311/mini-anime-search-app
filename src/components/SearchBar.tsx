import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

interface SearchBarProps {
    keyword: string;
    onSearch: (keyword: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': { m: 1, width: { xs: '90%', sm: '600px', md: '1200px' } },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => props.onSearch(e.target.value)}
                value={props.keyword}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: props.keyword && (
                        <InputAdornment position="end">
                            <IconButton onClick={() => props.onSearch('')} edge="end">
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={(theme) => ({
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '32px',
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.divider,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                    },
                })}
            />
        </Box>
    );
}
