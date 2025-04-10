// filepath: d:\CODE\Vova\services\strapiService.ts
import axios from 'axios';

const strapi = axios.create({
  baseURL: 'http://localhost:1337/api', // URL вашего Strapi API
});

export const getEntries = async (collection: string) => {
  try {
    const response = await strapi.get(`/${collection}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    throw error;
  }
};

export const getEntryById = async (collection: string, id: number) => {
  try {
    const response = await strapi.get(`/${collection}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching entry from Strapi:', error);
    throw error;
  }
};