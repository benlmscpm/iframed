"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  console.log(`render the following url: ${url}`);
  return (
    <main className="min-h-screen flex flex-col">
      <div className="pl-10 pt-4 pb-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
          iFramed
        </h1>
        <span className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          By Clinch Employee Connection.
        </span>
      </div>
      {url && <iframe src={url} className="grow" allowFullScreen></iframe>}
    </main>
  );
}
