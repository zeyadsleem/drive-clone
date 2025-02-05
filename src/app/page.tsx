import Hero from "~/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full max-w-6xl">
        <Hero />
      </div>
    </main>
  );
}
