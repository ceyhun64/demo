import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BackgroundPaths } from "../io/background-paths";
import { ArrowRight,Share2 } from "lucide-react";

import { Button } from "../ui/button";

export default function Hero() {
  const heroSlides = [
    {
      title: "IPHONE 15",
      subtitle: "FIRSATLARI KAÇIRMAYIN",
      body: "Iphone 15 ürünlerinde özel kampanyaları keşfedin.",
      img: "/hero/hero2.jpg",
    },
    {
      title: "NIKE ÜRÜNLERİNDE",
      subtitle: "SEPETTE %20 İNDİRİM",
      body: "Nike ürünlerinde özel indirimler sizi bekliyor.",
      img: "/hero/nike.jpg",
    },

    {
      title: "BRAND Y YENİLİKLERİ",
      subtitle: "SEPETTE %15 İNDİRİM",
      body: "Brand Y’nin en yeni ürünleri şimdi sizlerle.",
      img: "/hero/banner-img3.svg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <Carousel className="w-full">
        <CarouselContent>
          <BackgroundPaths />
          {heroSlides.map((s, idx) => (
            <CarouselItem key={idx}>
              <div className="grid gap-6 overflow-hidden rounded-2xl border p-6 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.subtitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className=" bg-green-500 text-white hover:bg-green-600 cursor-pointer">
                      Şimdi daha fazlası
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="bg-gray-500 text-white hover:bg-gray-600 cursor-pointer">
                      Paylaş
                      <Share2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </section>
  );
}
