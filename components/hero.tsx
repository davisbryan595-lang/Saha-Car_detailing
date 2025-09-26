"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

// Hotlinked Unsplash images (safe + reliable)
const heroImages = [
  "https://images.unsplash.com/photo-1617788138017-80a2c673d94d?auto=format&fit=crop&w=1920&q=80", // exterior wash
  "https://images.unsplash.com/photo-1597764966403-9ab97dbf3b0f?auto=format&fit=crop&w=1920&q=80", // interior detailing
  "https://images.unsplash.com/photo-1613211435815-471c7a0b4809?auto=format&fit=crop&w=1920&q=80", // ceramic coating
  "https://images.unsplash.com/photo-1621986609372-0f42c2e3e97a?auto=format&fit=crop&w=1920&q=80", // engine bay clean
]

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api?.scrollNext()
    }, 5000)
    return () => clearInterval(id)
  }, [api])

  return (
    <section className="relative h-[80vh] flex items-center text-center text-white">
      {/* Background carousel */}
      <Carousel
        className="absolute inset-0 -z-10 h-full w-full"
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {heroImages.map((src) => (
            <CarouselItem key={src} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              >
                {/* dark overlay for readability */}
                <div className="h-full w-full bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-gray-200">
          Premium Mobile Detailing
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          We Shine With Details
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Premium car washing and detailing services at your convenience.
          From quick exterior washes to full interior restorations and ceramic
          coatings — we keep your car looking its best.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact">
            <Button className="bg-primary text-primary-foreground text-lg px-8 py-4">
              Book an Appointment
            </Button>
          </Link>
          <Link href="#services">
            <Button variant="outline" className="text-lg px-8 py-4">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
