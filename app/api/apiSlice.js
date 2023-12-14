import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.solvepanda.com'}),
    endpoints: (builder) =>({
        getTasks: builder.query({
            query: () => '/tasks',
        })
    })

})

export const {
    useGetTasksQuery
} = apiSlice