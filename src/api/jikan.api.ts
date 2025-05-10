import axios, { AxiosError, AxiosInstance, CancelTokenSource } from 'axios';
import { createEndpoint } from './base.api';
import { AnimeDetail, AnimeListResponse } from '../types/model';

const baseUrl = 'https://api.jikan.moe/v4';
const itemsPerPage = '24';

class JikanService {
    endpoint: AxiosInstance;
    searchCancelToken: CancelTokenSource | undefined;

    constructor() {
        const { endpoint } = createEndpoint(baseUrl);
        this.endpoint = endpoint;
    }

    async getAnimeList(keyword: string, page: number): Promise<AnimeListResponse> {
        // cancel previous request
        if (this.searchCancelToken !== undefined) {
            this.searchCancelToken.cancel('Operation canceled due to new request.');
        }

        // create new source of cancel token for new request
        this.searchCancelToken = axios.CancelToken.source();

        let result: AnimeListResponse = {
            data: [],
            pagination: {
                last_visible_page: 0,
                has_next_page: false,
                current_page: 0,
                items_count: 0,
                items_total: 0,
                items_per_page: 0
            },
        };

        await this.endpoint
            .get('/anime?limit=' + itemsPerPage +'&q=' + keyword + '&page=' + page, { cancelToken: this.searchCancelToken.token })
            .then((response) => {
                result.data = response.data.data.map((anime: any) => ({
                    id: anime.mal_id,
                    title: anime.title,
                    image_url: anime.images.jpg.image_url,
                }));
                result.pagination = {
                    last_visible_page: response.data.pagination.last_visible_page,
                    has_next_page: response.data.pagination.has_next_page,
                    current_page: response.data.pagination.current_page,
                    items_count: response.data.pagination.items.count,
                    items_per_page: response.data.pagination.items.per_page,
                    items_total: response.data.pagination.items.total,  
                };
            })
            .catch((error: AxiosError) => {
                console.error('Error fetching anime list:', error);
                throw new Error('Failed to fetch anime list');
            });

        return result;
    }

    async getAnimeById(id: number): Promise<AnimeDetail> {
        let result: AnimeDetail = {
            id: 0,
            title: '',
            image_url: '',
            synopsis: '',
            score: 0,
            scored_by: 0,
            rank: 0,
            popularity: 0,
            members: 0
        }
        
        await this.endpoint
            .get('/anime/' + id)
            .then((response) => {
                const anime = response.data.data;
                result = {
                    id: anime.mal_id,
                    title: anime.title,
                    image_url: anime.images.jpg.image_url,
                    synopsis: anime.synopsis,
                    score: anime.score,
                    scored_by: anime.scored_by,
                    rank: anime.rank,
                    popularity: anime.popularity,
                    members: anime.members
                }
            })
            .catch((error: AxiosError) => {
                console.error('Error fetching anime detail:', error);
                throw new Error('Failed to fetch anime detail');
            });

        return result;
    }
}

export default JikanService;