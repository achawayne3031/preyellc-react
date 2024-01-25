import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_LOCAL_URL } from '../../utils/constantData'
import { getToken } from '../../utils/LocalStorage'

// Define a service using a base URL and expected endpoints
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOCAL_URL,
    prepareHeaders: (headers) => {
      let token: any = getToken()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', token)

      return headers
    },
  }),
  endpoints: (builder) => ({
    getUserData: builder.mutation({
      query: (payload) => ({
        url: '/dashboard/all-users',
        method: 'GET',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDataMutation } = dashboardApi
