import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_LOCAL_URL } from '../../utils/constantData'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_LOCAL_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (payload) => ({
        url: '/users/admin/login',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAdminLoginMutation } = adminApi
