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

  // const bracketColor = params.bracketColor || "#333";
  // const propColor = params.propColor || "#999";
  // const valueColor = params.valueColor || "#223";

  // TODO: add a button to create if no one prop is passed

  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-[30%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl opacity-70" />
        <div className="absolute right-[15%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-2xl opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[200px] opacity-40" />
      </div>
      <BusinessCard name={name} email={email} link={link} title={title} />
    </div>
  );
}
