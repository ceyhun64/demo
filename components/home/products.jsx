import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./productCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Apple AirPods Pro",
      tag: "Kulaklık",
      price: 49999,
      img: "/products/airpodspro.jpeg",
      rating: 4.5,
      reviewCount: 76,
      discounted: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      tag: "Telefon",
      price: 27999,
      img: "/products/2.jpg",
      rating: 4.7,
      reviewCount: 102,
      discounted: false,
    },
    {
      id: 3,
      name: "Apple MacBook Air M2",
      tag: "Bilgisayar",
      price: 219999,
      img: "/products/2.webp",
      rating: 4.8,
      reviewCount: 54,
      discounted: true,
    },
    {
      id: 4,
      name: "Nike Air Max 270",
      tag: "Ayakkabı",
      price: 3499,
      img: "/products/airpodspro.jpeg",
      rating: 4.4,
      reviewCount: 88,
      discounted: false,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      tag: "Kulaklık",
      price: 6499,
      img: "/products/4.png",
      rating: 4.6,
      reviewCount: 63,
      discounted: true,
    },
    {
      id: 6,
      name: "Samsung Galaxy Tab S9",
      tag: "Tablet",
      price: 17999,
      img: "/products/airpodspro.jpeg",
      rating: 4.5,
      reviewCount: 47,
      discounted: false,
    },
    {
      id: 7,
      name: "Dell XPS 13",
      tag: "Bilgisayar",
      price: 249999,
      img: "/products/2.jpg",
      rating: 4.7,
      reviewCount: 33,
      discounted: true,
    },
    {
      id: 8,
      name: "Adidas Ultraboost 22",
      tag: "Ayakkabı",
      price: 2999,
      img: "/products/2.webp",
      rating: 4.3,
      reviewCount: 59,
      discounted: false,
    },
    {
      id: 9,
      name: "Bose QuietComfort 45",
      tag: "Kulaklık",
      price: 5999,
      img: "/products/airpodspro.jpeg",
      rating: 4.5,
      reviewCount: 41,
      discounted: true,
    },
    {
      id: 10,
      name: "Apple iPhone 15",
      tag: "Telefon",
      price: 34999,
      img: "/products/2.jpg",
      rating: 4.8,
      reviewCount: 89,
      discounted: false,
    },
    {
      id: 11,
      name: "HP Spectre x360",
      tag: "Bilgisayar",
      price: 209999,
      img: "/products/2.webp",
      rating: 4.6,
      reviewCount: 38,
      discounted: true,
    },
    {
      id: 12,
      name: "Puma RS-X",
      tag: "Ayakkabı",
      price: 2199,
      img: "/products/4.png",
      rating: 4.2,
      reviewCount: 24,
      discounted: false,
    },
    {
      id: 13,
      name: "Sony Xperia 1 V",
      tag: "Telefon",
      price: 25999,
      img: "/products/airpodspro.jpeg",
      rating: 4.4,
      reviewCount: 28,
      discounted: true,
    },
    {
      id: 14,
      name: "Microsoft Surface Pro 9",
      tag: "Tablet",
      price: 18999,
      img: "/products/2.jpg",
      rating: 4.5,
      reviewCount: 34,
      discounted: false,
    },
    {
      id: 15,
      name: "JBL Charge 5",
      tag: "Hoparlör",
      price: 1499,
      img: "/products/2.webp",
      rating: 4.7,
      reviewCount: 51,
      discounted: true,
    },

  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Ürünler</h3>
          <p className="text-sm text-muted-foreground">
            Bu bölümde Gösteriliyor
          </p>
        </div>
        <Tabs defaultValue="one" className="hidden md:block ">
          <TabsList>
            <TabsTrigger className={"cursor-pointer"} value="one">
              Popüler
            </TabsTrigger>
            <TabsTrigger className={"cursor-pointer"} value="two">
              Yeni
            </TabsTrigger>
            <TabsTrigger className={"cursor-pointer"} value="three">
              İndirim
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      <div className="mt-6 flex justify-center cursor-pointer">
        <Button variant="outline">Daha Fazla Göster</Button>
      </div>
    </section>
  );
}
