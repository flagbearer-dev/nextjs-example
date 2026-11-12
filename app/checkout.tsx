"use client";

import { useFlag, useFlagsLoaded } from "./flags";

// The one place the old and new checkout part ways. The default is false, so
// the app keeps today's checkout until the flag is turned on.
export function Checkout() {
  const loaded = useFlagsLoaded();
  const newCheckout = useFlag("new-checkout", false);

  if (!loaded) {
    return <p className="text-zinc-500">Loading checkout…</p>;
  }
  return newCheckout ? <OneStepCheckout /> : <ClassicCheckout />;
}

function ClassicCheckout() {
  return (
    <section className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h2 className="text-lg font-semibold">Checkout</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Shipping address</li>
        <li>Delivery</li>
        <li>Payment</li>
      </ol>
      <button className="mt-5 rounded-lg bg-zinc-900 px-4 py-2 text-white dark:bg-zinc-100 dark:text-zinc-900">
        Continue to shipping
      </button>
    </section>
  );
}

function OneStepCheckout() {
  return (
    <section className="rounded-xl border border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950">
      <h2 className="text-lg font-semibold">One-step checkout</h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        Address, delivery and payment on one screen.
      </p>
      <button className="mt-5 rounded-lg bg-emerald-600 px-4 py-2 text-white">
        Pay now
      </button>
    </section>
  );
}
