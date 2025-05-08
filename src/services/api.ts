import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getGames: builder.query<Produto[], void>({
      query: () => '/ebac_sports'
    })
  })
})

export const { useGetGamesQuery } = api
export default api
