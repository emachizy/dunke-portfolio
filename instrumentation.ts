<<<<<<< HEAD
import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}
=======
// import * as Sentry from '@sentry/nextjs';

// export async function register() {
//   if (process.env.NEXT_RUNTIME === 'nodejs') {
//     await import('./sentry.server.config');
//   }

//   if (process.env.NEXT_RUNTIME === 'edge') {
//     await import('./sentry.edge.config');
//   }
// }
>>>>>>> 5093bf2160c65cf60ccb079ea1f95d347244662e

// export const onRequestError = Sentry.captureRequestError;
