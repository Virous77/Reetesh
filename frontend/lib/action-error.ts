import z from 'zod';

// Next.js replaces thrown server action errors with a generic message in
// production, so actions return failures as data for the client to show.

// An error whose message is safe to show to the user.
export class ActionError extends Error {}

export const toActionError = (
  error: unknown,
  fallback: string
): { error: string } => {
  if (error instanceof ActionError) return { error: error.message };
  if (error instanceof z.ZodError) {
    return { error: error.issues[0]?.message ?? fallback };
  }

  console.error(fallback, error);
  return { error: fallback };
};
