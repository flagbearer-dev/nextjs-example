import { useEffect, useSyncExternalStore } from "react";

import { init, type FlagKey } from "@flagbearer/web";

const clientKey = process.env.NEXT_PUBLIC_FLAGBEARER_CLIENT_KEY;
if (!clientKey) {
  throw new Error(
    "Set NEXT_PUBLIC_FLAGBEARER_CLIENT_KEY in .env.local. See README.md.",
  );
}

// One client for the whole app. Client keys are public, so this is safe in
// browser code.
export const flags = init({ clientKey });

export function useFlag(key: FlagKey, defaultValue: boolean) {
  const enabled = useSyncExternalStore(
    flags.subscribe,
    () => flags.getSnapshot()[key] ?? defaultValue,
    () => defaultValue,
  );

  useEffect(() => {
    flags.isEnabled(key, defaultValue);
  }, [key, defaultValue, enabled]);

  return enabled;
}

// False until the current visitor's flags have loaded.
export function useFlagsLoaded() {
  return useSyncExternalStore(
    flags.subscribe,
    () => flags.getStatus() !== "loading",
    () => false,
  );
}
