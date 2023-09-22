"use client";
import MainHome from "@/components/Home";
import { QueryClientProvider, queryClient } from "@/lib/queryClient";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainHome />
      </main>
    </QueryClientProvider>
  );
}
