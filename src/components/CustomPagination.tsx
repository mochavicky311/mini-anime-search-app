import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Pagination as PaginationMui } from '@mui/material';
import React from 'react';
import { Pagination } from '../types/model';

interface PaginationProps {
    pagination: Pagination;
    onPageChange: (newPage: number) => void;
}

export default function CustomPagination(props: PaginationProps) {
    const pagination = props.pagination;
    const startItem = (pagination.current_page - 1) * pagination.items_per_page + 1;
    const endItem = Math.min(pagination.current_page * pagination.items_per_page, pagination.items_total);

    console.log(pagination);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        props.onPageChange(page);
    };

    return (
        <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="body1">
                Showing {startItem} - {endItem} of {pagination.items_total} items
            </Typography>
            <PaginationMui
                count={pagination.last_visible_page}
                page={pagination.current_page}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={1}
            />
        </Stack>
    );
}