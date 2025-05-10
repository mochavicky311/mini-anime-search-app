import axios from 'axios';

export const createEndpoint = (baseUrl: string) => {
    const endpoint = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 60000,
        timeoutErrorMessage: 'Request timed out',
        responseType: 'json',
    });

    return {
        endpoint
    }
}