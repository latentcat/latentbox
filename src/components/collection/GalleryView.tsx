import { ResourceItem } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryViewProps {
  data: ResourceItem[]
  assetsPrefix?: string
}


export function GalleryView(props: GalleryViewProps) {
  return (
    <div
      className={cn(
        "not-prose",
        "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
        "gap-6",
      )}
    >
      {props.data.map((item, index) => (
        <Link href={item.url} target="_blank">
          <div
            key={item.id}
            className="flex flex-col items-center"
          >
            <div className="w-full relative rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9} />
              <Image
                className="absolute top-0 left-0 w-full h-full"
                width={1280}
                height={720}
                src={`${props.assetsPrefix || ""}/${item.id}.jpg`}
                alt=""
                unoptimized
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-lg ring-1 ring-inset ring-foreground/10" />
            </div>
            <div className="mt-2 text-sm text-foreground/70">
              {item.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}