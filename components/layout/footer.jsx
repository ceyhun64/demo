import React from "react";
import { Languages } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BackgroundBeamsWithCollision from "@/components/io/backgrounds-beams-with-collission";

export default function Footer() {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="relative mt-16 border-t">
        <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <Link href="/" className="font-bold text-xl">
            <img src="/logo/logo.png" alt="logo" />
          </Link>            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Hızlı Linkler</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground">
              {[
                "Anasayfa",
                "Hakkımızda",
                "Hizmetlerimiz",
                "Satış Yap",
                "Şartlar & Koşullar",
                "Mağazalar",
                "Markalarımız",
                "Emlak",
                "Otomotiv",
                "Telefon & Tablet",
                "Bilgisayar & Ofis",
              ].map((l) => (
                <Link key={l} href="#" className="hover:text-foreground">
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Livben</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground">
              {[
                "Ekibimiz",
                "Bizimle Çalışın",
                "Gizlilik Politikası",
                "Kariyer",
                "Biz Kimiz",
              ].map((l) => (
                <Link key={l} href="#" className="hover:text-foreground">
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Yardım</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground">
              {["Yardım", "SSS", "İletişim"].map((l) => (
                <Link key={l} href="#" className="hover:text-foreground">
                  {l}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>+90 212 222 22 22</p>
              <p>support@siteniz.com</p>
            </div>
          </div>
        </div>

        <div className="border-t relative">
          <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
            <p>© 2024 otuz.com Inc.</p>
            <div className="flex items-center gap-3">
              <div className="h-6 w-10 rounded bg-muted" />
              <div className="h-6 w-10 rounded bg-muted" />
              <div className="h-6 w-10 rounded bg-muted" />
              <div className="h-6 w-10 rounded bg-muted" />
              <div className="h-6 w-10 rounded bg-muted" />
            </div>
          </div>

          {/* Sağ alt köşeye payment.jpg ekleme */}
          <div className="absolute bottom-4 right-4 w-32 h-auto">
            <Image
              src="/footer/payment.webp"
              alt="Payment Methods"
              width={256}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
}
