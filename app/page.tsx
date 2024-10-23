import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    // Justify-center (center's horizontally), items-center (center's vertically)
    <main className="relative flex flex-col items-center justify-center px-5 mx-auto overflow-hidden bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
}
