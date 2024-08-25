import Image from "next/image";
import Navbar from "./navbar/navbar";
import Hero from "./hero.tsx/hero";
import Job from "./job/job";
import Info from "./info/info";
import Companies from "./companies/companies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-10 bg-[#06090D]">
      <Navbar/>
      <Hero/>
      <Job/>
      <Info/>
      <Companies/>
      </main>
      
      )}
