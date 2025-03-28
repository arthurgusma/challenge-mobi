import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Brand, Model, ModelResponse, VehiclePrice, Year } from '@/@types';

export const fipeApi = createApi({
  reducerPath: 'fipeApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://parallelum.com.br/fipe/api/v1/carros' 
  }),
  endpoints: (builder) => ({
    getBrands: builder.query<Brand[], void>({
      query: () => '/marcas',
      transformResponse: (response: Brand[]) => 
        response.sort((a, b) => a.nome.localeCompare(b.nome))
    }),

    getModelsByBrand: builder.query<Model[], string>({
      query: (brandCode) => `/marcas/${brandCode}/modelos`,
      transformResponse: (response: ModelResponse) => 
        response.modelos.sort((a, b) => a.nome.localeCompare(b.nome))
    }),

    getYearsByModel: builder.query<Year[], { brandCode: string, modelCode: string }>({
      query: ({ brandCode, modelCode }) => 
        `/marcas/${brandCode}/modelos/${modelCode}/anos`
    }),

    getVehiclePrice: builder.query<VehiclePrice, { 
      brandCode: string, 
      modelCode: string, 
      yearCode: string 
    }>({
      query: ({ brandCode, modelCode, yearCode }) => 
        `/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
    })
  })
});

export const {
  useGetBrandsQuery,
  useGetModelsByBrandQuery,
  useGetYearsByModelQuery,
  useGetVehiclePriceQuery
} = fipeApi;