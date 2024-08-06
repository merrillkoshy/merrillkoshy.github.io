// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Questions, Sections } from "../types";

// Define a service using a base URL and expected endpoints
export const deutsch = createApi({
  reducerPath: "deutsch",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Questions[], void>({
      query: () => `/questions`,
    }),
    getSectionsByLevel: builder.query<Sections[], string>({
      query: (level) => ({
        url: `/sections/${level}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
    login: builder.mutation<
      { access_token: string; token_type: string; user_id: string },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
    }),
    getUser: builder.query<
      {
        id: string;
        email: string;
        full_name: string;
        access: string;
      },
      string
    >({
      query: (id) => ({
        url: `/users/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetQuestionsQuery,
  useGetSectionsByLevelQuery,
  useLoginMutation,
  useGetUserQuery,
} = deutsch;
