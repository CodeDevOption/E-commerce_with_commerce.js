import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://asos2.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": "4390fc0da1mshd53c7c4ad7e5924p1c80a7jsnea8c46306b52",
  "X-RapidAPI-Host": "asos2.p.rapidapi.com",
};
const createRequest = (url) => ({ url, headers: headers });

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () =>
        createRequest(
          "/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US"
        ),
    }),
  }),
});

export const { useProductsQuery } = productApi;
