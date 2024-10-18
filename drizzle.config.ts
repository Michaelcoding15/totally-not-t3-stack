import { defineConfig } from 'drizzle-kit';
import * as process from 'node:process';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_AUTH_TOKEN
	},

	verbose: true,
	strict: true,
	dialect: 'turso',
	schema: './src/lib/server/db/schema/*',
});
