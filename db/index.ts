import { createPool } from '@vercel/postgres';

export const pool = createPool({
  connectionString: process.env.DATABASE_URL,
});