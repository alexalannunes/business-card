"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateCardPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    link: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    router.push(`/card?${query}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-zinc-100 bg-zinc-950">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Create Your Card</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="link">Link</Label>
            <Input name="link" value={formData.link} onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full mt-4">
            Generate
          </Button>
        </form>
      </div>
    </main>
  );
}
