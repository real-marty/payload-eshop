"use client";

import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod"

/**
 * Client-side env access. Only declare NEXT_PUBLIC_* vars here.
 */
export const env = createEnv({
    client: {
        NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
    },
    // Provide the runtime values for the client-only variables above
    experimental__runtimeEnv: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
});

export type ClientEnv = typeof env;

