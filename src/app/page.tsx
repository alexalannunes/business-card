import { BusinessCard } from "@/components/business-card";

export default function Home() {
  return (
    <div className="flex bg-gradient-to-r from-zinc-900 to-gray-700 items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <BusinessCard
          name={"Alex Alan Nunes"}
          email={"alexalannunes@gmail.com"}
          link={"https://alexalannunes.com"}
          title={"Frontend Developer"}
        />
      </main>
    </div>
  );
}
