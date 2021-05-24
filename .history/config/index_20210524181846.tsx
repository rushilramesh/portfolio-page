const dev = process.env.NODE_ENV !== 'production';

export const server =  process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.VERCEL_URL;