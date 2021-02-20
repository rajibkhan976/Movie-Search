import { apiClient } from './apiClient';

export function getMovies() {
    return apiClient.get(`/?i=tt3896198&apikey=81b28a25&page=100`);
}

export function getMoviesByTitle(title) {
    return apiClient.get(`/?i=tt3896198&apikey=81b28a25&t=${title}`);
}

export function getMoviesByYear(year) {
    return apiClient.get(`/?i=tt3896198&apikey=81b28a25&y=${year}`);
}