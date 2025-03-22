import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/domains/**/schema.ts",
  out: "./app/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
