import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Kadın",
      img: "/placeholder/800x500.jpg",
      subtitle: "Elbise · Tişört · Gömlek",
    },
    {
      title: "Erkek",
      img: "/placeholder/800x500-2.jpg",
      subtitle: "Gömlek · Pantolon · Ceket",
    },
    {
      title: "Ayakkabı",
      img: "/placeholder/800x500-3.jpg",
      subtitle: "Spor Ayakkabı · Bot · Sandalet",
    },
    {
      title: "Çanta",
      img: "/placeholder/800x500-4.jpg",
      subtitle: "Sırt Çantası · Omuz Çantası · Clutch",
    },
    {
      title: "Çocuk",
      img: "/placeholder/800x500-5.jpg",
      subtitle: "Elbise · Tişört · Pantolon",
    },
    {
      title: "Aksesuar",
      img: "/placeholder/800x500-6.jpg",
      subtitle: "Şapka · Saat · Takı",
    },
    {
      title: "Ev & Yaşam",
      img: "/placeholder/800x500-7.jpg",
      subtitle: "Banyo · Mutfak · Dekor",
    },
    {
      title: "Elektronik",
      img: "/placeholder/800x500-8.jpg",
      subtitle: "Telefon · Bilgisayar · Kulaklık",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Öne Çıkan Kategoriler</h3>
        <Link href="#" className="text-sm text-primary">
          Tümünü gör
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((c, idx) => (
          <Link
            key={idx}
            href="#"
            className="group overflow-hidden rounded-2xl border"
          >
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Giyim</p>
                  <h4 className="text-base font-semibold">{c.title}</h4>
                </div>
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </div>
              <p className="mt-2 line-clamp-1 text-xs text-muted-foreground">
                {c.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
