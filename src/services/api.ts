import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => ({
    getGames: builder.query<Produto[], void>({
      query: () => '/produtos'
    })
  })
})

export const { useGetGamesQuery } = api
export default api
