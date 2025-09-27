import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod"

/**
 * Server-side and shared env validation.
 * Add your real variables here as you need them.
 * Example for later:
 *  DATABASE_URL: z.url(),
 */
export const env = createEnv({
    // Variables that must NEVER be exposed to the client go here
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
        DATABASE_URI: z.url({ error: "Invalid database URI" }),
        PAYLOAD_SECRET: z.string().min(8, "Must be at least 8 characters long"),
    },


    // Pass the variables from process.env that you defined above
    experimental__runtimeEnv: process.env,
    /**
     * Treat empty strings as undefined so optional vars can be left blank
     * without failing validation.
     */
    emptyStringAsUndefined: true,

    /**
     * Set SKIP_ENV_VALIDATION=true to bypass checks (useful for CI or
     * when bootstrapping). Prefer keeping validation on locally and in prod.
     */
    skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
});

export type Env = typeof env;

