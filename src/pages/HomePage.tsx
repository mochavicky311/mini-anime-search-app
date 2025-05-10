import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import JikanService from '../api/jikan.api';
import { Anime, Pagination } from '../types/model';
import SearchBar from '../components/SearchBar';
import AnimeItemList from '../components/AnimeItemList';
import Loading from '../components/Loading';
import CustomPagination from '../components/CustomPagination';
import ErrorMessage from '../components/ErrorMessage';

const jikanService = new JikanService();

const debouncedLoadAnimeList = debounce(
    (keyword: string, page: number, callback: (data: Anime[], pagination: Pagination) => void, setLoading: (loading: boolean) => void) => {
        setLoading(true);
        jikanService
            .getAnimeList(keyword, page)
            .then((response) => {
                callback(response.data, response.pagination);
            })
            .catch((error) => {
                console.error('Error fetching anime list:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    },
    250
);

export default function HomePage() {
    const [keyword, setKeyword] = useState<string>('');
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        last_visible_page: 1,
        has_next_page: false,
        current_page: 1,
        items_count: 0,
        items_total: 0,
        items_per_page: 24
    });
    const [loading, setLoading] = useState<boolean>(true);

    const updateAnimeList = useCallback((data: Anime[], pagination: Pagination) => {
        setAnimeList(data);
        setPagination(pagination);
    }, []);

    useEffect(() => {
        debouncedLoadAnimeList(keyword, pagination.current_page, updateAnimeList, setLoading);
    }, [keyword, pagination.current_page, updateAnimeList]);

    useEffect(() => {
        setPagination((prev) => ({
            ...prev,
            current_page: 1,
        }));
    }, [keyword]);

    const handlePageChanges = (newPage: number) => {
        if (newPage >= 1 && newPage <= pagination.last_visible_page) {
            setPagination({ ...pagination, current_page: newPage });
        }
    };

    return (
        <>
            <SearchBar keyword={keyword} onSearch={setKeyword} />
            {loading ? <Loading />
                : animeList.length > 0 ? (
                 <>
                    <AnimeItemList animeList={animeList} />
                    <CustomPagination pagination={pagination} onPageChange={handlePageChanges} />
                 </>
                
                ) : (
                    <ErrorMessage message_text="No results found." />
            )}
        </>
    );
}