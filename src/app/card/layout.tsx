import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Card is ready", // generate by search params
  description: "Your card is ready",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
