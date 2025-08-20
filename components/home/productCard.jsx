"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ p }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked((prev) => !prev);

  return (
    <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full bg-muted overflow-hidden rounded-t-2xl">
          <Image src={p.img} alt={p.name} fill className="object-cover" />
          <div className="absolute left-3 top-3 flex gap-2 z-10">
            {p.discounted && (
              <Badge className="rounded-full">Fiyat Düştü</Badge>
            )}
            <Badge variant="secondary" className="rounded-full">
              TR
            </Badge>
          </div>
          <Button
            variant="secondary"
            size="icon"
            onClick={toggleLike}
            className="absolute right-3 top-3 rounded-full z-10 cursor-pointer"
          >
            <motion.div
              animate={{ scale: liked ? 1.3 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={liked ? "text-red-500" : "text-gray-400"}
            >
              <Heart className="h-5 w-5" />
            </motion.div>
          </Button>
          {/* Mini kalp patlaması animasyonu */}
        
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <p className="text-[11px] tracking-wide text-muted-foreground">
          {p.tag}
        </p>
        <CardTitle className="line-clamp-1 text-base">{p.name}</CardTitle>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.round(p.rating)
                  ? "fill-current text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1">({p.reviewCount} Yorum)</span>
        </div>
        <div className="text-lg font-bold">
          {p.price.toLocaleString("tr-TR")} TRY
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
       
      </CardFooter>
    </Card>
  );
}
