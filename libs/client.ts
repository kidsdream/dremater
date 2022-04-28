import { createClient } from 'microcms-js-sdk';

let serviceDomainName = 'dremater'

if (process.env.NODE_ENV == "development") {
  serviceDomainName = 'dremater-develop'
}

export const client = createClient({
  serviceDomain: serviceDomainName,
  apiKey: process.env.API_KEY,
});
