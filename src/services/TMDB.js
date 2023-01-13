// this files makes all the calls to the TMDB api
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

const tmbdApiKey = process.env.REACT_APP_TMBD_KEY;
const page = 1;

export const tmbdApi = createApi({
    reducerPath: 'tmbdApi',
    // set the baseUrl for every endpoint below
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        // Get movies by TYPE
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=${tmbdApiKey}`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
} = tmbdApi;