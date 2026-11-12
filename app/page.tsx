import { Checkout } from "./checkout";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 px-4 py-16">
      <header>
        <h1 className="text-2xl font-semibold">Your cart</h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          1 × Flag pole, $40.00
        </p>
      </header>
      <Checkout />
      <p className="text-sm text-zinc-500">
        The checkout below the cart is chosen by the{" "}
        <code className="font-mono">new-checkout</code> flag in Flagbearer.
        Turn it on in the dashboard and this page switches within seconds, with
        no reload.
      </p>
    </main>
  );
}
