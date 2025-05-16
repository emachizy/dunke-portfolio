<<<<<<< HEAD
// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
=======
// sentry.edge.config.ts
>>>>>>> 5093bf2160c65cf60ccb079ea1f95d347244662e

// import * as Sentry from "@sentry/nextjs";

<<<<<<< HEAD
Sentry.init({
  dsn: "https://f83db747b51b6574323b90cb9c004118@o4509266585059328.ingest.de.sentry.io/4509266588663888",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
=======
// Initialize Sentry for edge runtimes
// Sentry.init({
//   dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",
//   tracesSampleRate: 1.0,
//   debug: process.env.NODE_ENV === "development",
//   environment: process.env.NODE_ENV,
// });
>>>>>>> 5093bf2160c65cf60ccb079ea1f95d347244662e
