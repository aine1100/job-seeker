import Image from "next/image";
import Navbar from "./navbar/navbar";
import Hero from "./hero.tsx/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-10 bg-slate-900">
      <Navbar/>
      <Hero/>
      </main>
      
      )}
