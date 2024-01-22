/// <reference path="./window.d.ts" />

const host = window.API_SERVER_HOST;
const port = window.API_SERVER_PORT;
const protocol = window.API_USING_SSL ? 'https' : 'http';

export const hostBaseUrl = `${protocol}://${host}:${port}`;
export const apiEndpointUrl = `${hostBaseUrl}/api/v1`;
