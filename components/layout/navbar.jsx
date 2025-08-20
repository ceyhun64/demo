// Header
import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Globe } from "lucide-react";
import {ChevronDown} from "lucide-react";
import {User} from "lucide-react";
import { ShoppingCart } from "lucide-react";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Kategoriler</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 grid gap-2">
                {[
                  "İş İlanları",
                  "Tablet & Telefon",
                  "Aksesuar",
                  "Mağazalar",
                  "Elektronik",
                  "Bilgisayar & Ofis",
                ].map((i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {i}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-bold text-xl">
            <img src="/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden flex-1 items-center px-6 lg:flex">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
            <Input placeholder="Ürün veya kategori ara" className="pl-9" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <Globe className="h-4 w-4" /> TR{" "}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Dil</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>TR</DropdownMenuItem>
              <DropdownMenuItem>EN</DropdownMenuItem>
              <DropdownMenuItem>DE</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
         
        </div>
      </div>

      <div className="hidden border-t lg:block">
        <div className="container mx-auto flex items-center gap-6 px-4 py-2 text-sm">
          <span className="font-medium">Kategoriler</span>
          {[
            "İş İlanları",
            "Tablet & Telefon",
            "Aksesuar",
            "Mağazalar",
            "Elektronik",
            "Bilgisayar & Ofis",
          ].map((i) => (
            <Link
              key={i}
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              {i}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
