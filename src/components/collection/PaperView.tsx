import { ResourceItem } from "@/lib/data_types";
import React, { Fragment } from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import data from "@/app/[locale]/(docs)/sd-ecology/data.json";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";


type PaperType = {
  category: string
  items: {
    name?: string
    internal_category?: string
    arxiv?: string
    github?: string
    project_website?: string
    hugging_face?: string
  }[]
}[]

interface GalleryViewProps {
  data: PaperType
  assetsPrefix?: string
  namespace: string
}


export function PaperView(props: GalleryViewProps) {

  const t = useTranslations(props.namespace as any);

  return (
    <div
      className={cn(
        "not-prose",
        "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
        "gap-6",
      )}
    >
      {data.map((group) => (
        <div key={group.category}>
          <SectionTitle title={t(group.category as never)} />
          <div>
            {group.items.map((item) => (
              <div key={item.name}>
                <div>{item.name}</div>
                {/*<Link href={item.arxiv}>Arxiv</Link>*/}
                {/*<Link href={item.github}>Github</Link>*/}
                {/*<Link href={item.hugging_face}>HuggingFace</Link>*/}
                {/*<Link href={item.project_website}>Website</Link>*/}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}