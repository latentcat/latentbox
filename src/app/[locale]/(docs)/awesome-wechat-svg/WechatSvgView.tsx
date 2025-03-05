import { ResourceItem } from "@/lib/data_types";
import React from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { LinkIcon } from "lucide-react";

interface GalleryViewProps {
  data: ResourceItem[]
  assetsPrefix?: string
}


export function WechatSvgView(props: GalleryViewProps) {
  return (
    <div>
      {props.data.map((item, index) => (
        <div
          key={item.id}
          className="mb-6"
        >
          <Link
            href={item.url}
            target="_blank"
            className="flex"
          >
            <h2 className="">
              <LinkIcon className="w-5 h-5 text-foreground/50 inline-block mr-2" />
              {item.name}
            </h2>
          </Link>
          <p className="not-prose mb-6">{item.desc}</p>
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