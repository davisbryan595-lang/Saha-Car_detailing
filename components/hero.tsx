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
  "/exterior-car-wash-scene.jpg",
  "/interior-detailing-car-seats.jpg",
  "/ceramic-coating-application.png",
  "/engine-bay-clean.jpg",
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
    <section className="relative bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/heroimage.jpg"
          alt="Car detailing background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Premium Mobile Detailing
            </p>
            <h1 className="text-pretty text-4xl md:text-5xl font-semibold mt-2">
              We Shine With Details
            </h1>
            <p className="mt-4 leading-relaxed text-balance">
              Premium car washing and detailing services at your convenience. From quick exterior washes to full interior
              restorations and ceramic coatings — we keep your car looking its best.
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
                  src="/placeholder-user.jpg"
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

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] rounded-lg border border-border overflow-hidden">
              <Image
                src="/interior-detailing-car-seats.jpg"
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
