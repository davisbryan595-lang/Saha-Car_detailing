"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const heroImages = [
  "https://images.unsplash.com/photo-1617788138017-80a2c673d94d?auto=format&fit=crop&w=1600&q=80", // exterior wash
  "https://images.unsplash.com/photo-1597764966403-9ab97dbf3b0f?auto=format&fit=crop&w=1600&q=80", // interior detailing
  "https://images.unsplash.com/photo-1613211435815-471c7a0b4809?auto=format&fit=crop&w=1600&q=80", // ceramic coating
  "https://images.unsplash.com/photo-1621986609372-0f42c2e3e97a?auto=format&fit=crop&w=1600&q=80", // engine bay clean
]

export function Hero() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api?.scrollNext()
    }, 4500)
    return () => clearInterval(id)
  }, [api])

  return (
    <section
      className="relative bg-background"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1617788138017-80a2c673d94d?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        {/* Background carousel */}
        <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
          <Carousel className="h-full" opts={{ loop: true, align: "start" }} setApi={setApi}>
            <CarouselContent className="h-full">
              {heroImages.map((src) => (
                <CarouselItem key={src} className="h-[60vh] md:h-[72vh]">
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt="Showcase vehicle detailing"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Soft dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/70 to-background/50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Premium Mobile Detailing
            </p>
            <h1 className="text-pretty text-4xl md:text-5xl font-semibold mt-2">
              We Shine With Details
            </h1>
            <p className="mt-4 leading-relaxed text-balance">
              Premium car washing and detailing services at your convenience. From quick
              exterior washes to full interior restorations and ceramic coatings — we keep
              your car looking its best.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="#contact">
                <Button className="bg-primary text-primary-foreground">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline">Explore Services</Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=60&q=80"
                  alt="Customer"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span>Trusted by local owners</span>
              </div>
              <span aria-hidden>•</span>
              <span>Fully insured</span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] rounded-lg border border-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1597764966403-9ab97dbf3b0f?auto=format&fit=crop&w=1200&q=80"
                alt="Interior detailing in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
