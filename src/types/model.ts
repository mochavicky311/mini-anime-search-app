export interface AnimeListResponse {
    data: Anime[];
    pagination: Pagination;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items_count: number;
    items_total: number;
    items_per_page: number;
}

export interface Anime {
    id: number;
    title: string;
    image_url: string;
}

export interface AnimeDetail extends Anime {
    synopsis: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
}