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
      query: (level) => `/sections/${level}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuestionsQuery, useGetSectionsByLevelQuery } = deutsch;
