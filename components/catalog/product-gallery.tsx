"use client"

import { useState } from "react"
import Image from "next/image"
import type { CatalogImage } from "@/data/catalog"

export function ProductGallery({ images, badge }: { images: CatalogImage[]; badge?: string }) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-secondary">
        <Image
          src={current.src || "/placeholder.svg"}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
          className="object-cover"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
            {badge}
          </span>
        )}
        {current.caption && (
          <span className="absolute bottom-0 left-0 right-0 bg-background/80 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-foreground">
            {current.caption}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ver foto ${index + 1}: ${image.caption ?? image.alt}`}
              aria-current={index === active}
              className={`relative aspect-square overflow-hidden border transition-colors ${
                index === active ? "border-primary" : "border-border hover:border-primary/60"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
