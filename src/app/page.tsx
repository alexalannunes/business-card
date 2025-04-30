import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BusinessCard } from "@/components/business-card";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-12 text-center text-zinc-100 overflow-hidden">
      {/* Neon background glow with dark bg included */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl opacity-70" />
        <div className="absolute right-[15%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-2xl opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[200px] opacity-40" />
      </div>

      <section className="space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Create your own developer-style business card
        </h1>
        <p className="text-zinc-400">
          Customize your contact info and share it with a clean, VS
          Code–inspired interface.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-2 font-semibold border border-zinc-800"
        >
          <Link href="/create">Generate Your Card</Link>
        </Button>
      </section>

      <BusinessCard
        name="Alex Alan Nunes"
        title="Frontend Developer"
        email="alex@email.com"
        link="alex.dev"
      />
    </main>
  );
}
