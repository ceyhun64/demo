"use client";

import React from "react";
import Image from "next/image";
import Topbar from "@/components/home/topbar";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";

import BrandMarquee from "@/components/home/brandMarquee";
import CategoryGrid from "@/components/home/categoryGrid";
import Products from "@/components/home/products";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Navbar />
      <BrandMarquee />

      <Hero />
  <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 items-center gap-6 py-6 md:grid-cols-4">
    {[
      { title: "Giyim", subtitle: "Elbise · Tişört · Kot Pantolon", img: "/category/giyim.jpg" },
      { title: "Elektronik", subtitle: "Telefon · Tablet · Bilgisayar", img: "/category/elektronik.jpg" },
      { title: "Ev & Yaşam", subtitle: "Mobilya · Dekor · Aksesuar", img: "/category/ev.jpg" },
      { title: "Spor & Outdoor", subtitle: "Spor Giyim · Ayakkabı · Ekipman", img: "/category/spor.jpg" },
    ].map((cat, i) => (
      <div
        key={i}
        className="flex items-center gap-3 rounded-xl border p-4"
      >
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={cat.img} alt={cat.title} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold">{cat.title}</p>
          <p className="text-xs text-muted-foreground">{cat.subtitle}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <Products />
      <Footer />
    </div>
  );
}
