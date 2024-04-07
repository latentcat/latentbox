import { ResourceItem } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageKeys, useTranslations } from "next-intl";
import { it } from "node:test";

interface GalleryViewProps {
  data: ResourceItem[]
}


export function ListView(props: GalleryViewProps) {
  const t = useTranslations("docs.sd-ecology")
  return (
    <div
      className={cn(
        "not-prose text-foreground",
        "grid divide-y border-y",
      )}
    >
      {props.data.map((item, index) => (
        <Link
          href={item.url}
          target="_blank"
          key={item.id}
        >
          <div
            className="flex flex-col"
          >
            <div className="py-3 text-base flex justify-between gap-6">
              {item.name}
              {item.id && (
                <div className="text-sm text-foreground/50 text-end pt-0.5">
                  {/*{t(item.id)}*/}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}