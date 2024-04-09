import { ResourceItem } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductViewProps {
  data: ResourceItem[]
  assetsPrefix?: string
}


export function ProductView(props: ProductViewProps) {
  return (
    <div
      className={cn(
        "not-prose",
        "grid grid-cols-2 xl:grid-cols-3",
        "gap-4",
      )}
    >
      {props.data.map((item, index) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          className="group"
        >
          <div
            key={item.id}
            className="flex flex-col items-center"
          >
            <div className="w-full relative rounded-xl overflow-hidden dark:bg-border/50">
              <div className="flex flex-col items-center p-6 pb-4">
                <Image
                  className="shrink-0 bg-background border rounded-full"
                  width={64}
                  height={64}
                  src={`${props.assetsPrefix || ""}/${item.id}.jpg`}
                  alt=""
                  // unoptimized
                />
                <div className="mt-3 text-sm _text-foreground/70 text-center">
                  {item.name}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-xl ring-1 ring-inset ring-border transition group-hover:ring-foreground" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}