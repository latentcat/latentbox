import { ResourceItem, isDisabled } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryViewProps {
  data: ResourceItem[]
}


export function ListView(props: GalleryViewProps) {
  return (
    <div
      className={cn(
        "not-prose text-foreground",
        "grid divide-y border-y",
      )}
    >
      {props.data.map((item, index) => (
        <div
          key={item.id}
          className={`${isDisabled(item) ? 'pointer-events-none' : ''}`}
        >
          <Link
            href={item.url}
            target="_blank"
          >
            <div className="flex flex-col">
              <div className="py-3 text-base flex justify-between gap-6">
                {item.name}
                {item.desc && (
                  <div className="text-sm text-foreground/50 text-end pt-0.5">
                    {item.desc}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}