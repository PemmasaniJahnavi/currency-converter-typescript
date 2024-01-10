export const heading: string = "CURRENCY CONVERTER";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "c6529a29cee69f0625ad841a";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
