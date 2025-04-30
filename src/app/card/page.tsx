import { BusinessCard } from "@/components/business-card";

export default async function BusinessCardPage({
  searchParams,
}: {
  searchParams: Promise<{
    name?: string;
    title?: string;
    email?: string;
    link?: string;
    bracketColor?: string;
    propColor?: string;
    valueColor?: string;
  }>;
}) {
  const params = await searchParams;
  const name = params.name || "your name";
  const title = params.title || "your tile";
  const email = params.email || "youremail@email.com";
  const link = params.link || "you.io";

  // not every dev has a website

  // const bracketColor = params.bracketColor || "text-zinc-400";
  // const propColor = params.propColor || "text-red-400";
  // const valueColor = params.valueColor || "text-yellow-300";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 p-4">
      <BusinessCard name={name} email={email} link={link} title={title} />
    </div>
  );
}
