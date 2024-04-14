import { ResourceItem } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionTitle } from "@/components/collection/SectionTitle";

interface GalleryViewProps {
  data: ResourceItem[]
  assetsPrefix?: string
}


export function WechatSvgView(props: GalleryViewProps) {
  return (
    <div
      className={cn(
        "",
        "grid",
        "gap-6",
      )}
    >
      {props.data.map((item, index) => (
        <div
          key={item.id}
        >
          <Link
            href={item.url}
            target="_blank"
          >
            <SectionTitle title={item.name} />
          </Link>
          <div className="grid grid-cols-3 gap-3 not-prose">
            {["1", "2", "3"].map((imageIndex, index) => (
              <div
                key={index}
                className="w-full relative rounded-xl overflow-hidden"
              >
                <AspectRatio ratio={9 / 16} />
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  width={1280}
                  height={720}
                  src={`${props.assetsPrefix || ""}/${item.id}-${imageIndex}.jpg`}
                  alt=""
                  // unoptimized
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-xl ring-1 ring-inset ring-foreground/10" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}