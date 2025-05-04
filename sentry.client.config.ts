import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f83db747b51b6574323b90cb9c004118@o4509266585059328.ingest.de.sentry.io/4509266588663888",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
