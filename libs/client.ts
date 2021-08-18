import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'dremater',
  apiKey: process.env.API_KEY,
});
