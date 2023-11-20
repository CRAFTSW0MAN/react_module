import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IdataProduct } from '../type/interfaces.interface';

export const apiProducts = createApi({
  reducerPath: 'apiProducts',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/' }),
  endpoints: (build) => ({
    getSearch: build.query({
      query: ({ search, limit, skip }) =>
        `search?q=${search}&skip=${limit * skip}&limit=${limit}`,
    }),
    getDetailsProduct: build.query<IdataProduct, {id:string}>({
      query: ({id}) => `${String(id)}`,
    }),
  }),
});
export const { useGetSearchQuery, useGetDetailsProductQuery } = apiProducts;
