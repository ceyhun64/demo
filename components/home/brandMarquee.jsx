import React from "react";
import Image from "next/image";
import { Marquee, MarqueeContent, MarqueeItem } from "@/components/io/marquee";

export default function BrandMarquee() {
  const brands = [
    { name: "adidas", img: "/brandLogo/adidas.png" },
    { name: "puma", img: "/brandLogo/puma.png" },
    { name: "nike", img: "/brandLogo/nike.png" },
    { name: "u.s. polo", img: "/brandLogo/polo.jpg" },
    { name: "mercedes", img: "/brandLogo/mercedes.png" },
    { name: "apple", img: "/brandLogo/apple.png" },
    { name: "msi", img: "/brandLogo/msi.png" },
    { name: "lenovo", img: "/brandLogo/lenovo.png" },
    { name: "xbox", img: "/brandLogo/xbox.png" },
    { name: "playstation", img: "/brandLogo/playstation.png" },
    { name: "altınyıldız", img: "/brandLogo/altınyıldız.png" },
  ];

  return (
    <div className="mt-4 cursor-pointer">
      <Marquee>
        <MarqueeContent>
          {brands.map((brand, index) => (
            <MarqueeItem
              className="h-16 w-28 flex items-center justify-center"
              key={index}
            >
              <Image
                alt={brand.name}
                src={brand.img}
                width={64}
                height={64}
                className="object-contain"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
