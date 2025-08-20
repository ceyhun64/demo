"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Topbar() {
  const leftLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Blog Detail", href: "/blog/1" },
    { name: "Kategori", href: "/kategori" },
    { name: "P. Detail", href: "/product/1" },
  ];

  const rightLinks = [
    { name: "İade Politikası", href: "/iade" },
    { name: "Yardım Merkezi", href: "/yardim" },
    { name: "Mağaza Aç", href: "/magaza" },
  ];

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-12 items-center justify-between px-4">
        {/* Sol kısım */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {leftLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobil menü butonu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Menü</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 grid gap-3 text-sm font-medium">
                {[...leftLinks, ...rightLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Sağ kısım */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
