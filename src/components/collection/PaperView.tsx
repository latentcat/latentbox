import { ResourceItem } from "@/lib/data_types";
import React, { Fragment } from "react";
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { ArxivIcon, DiscordIcon, GitHubIcon, HuggingFaceIcon, XhsIcon, XIcon } from "@/components/LogosBrand";
import { GlobeIcon } from "lucide-react";

type PaperType = {
  category: string
  items: {
    name: string
    arxiv?: string
    github?: string
    project_website?: string
    hugging_face?: string
    principle_diagram?: boolean
    showcase?: boolean
  }[]
}[]

interface GalleryViewProps {
  data: PaperType
  assetsPrefix?: string
  namespace: string
}


const linkButtonClass="text-foreground/60 hover:text-foreground transition flex items-center "


export function PaperView(props: GalleryViewProps) {

  const t = useTranslations(props.namespace as any);

  return (
    <div
      className={cn(
        "",
        "",
        "space-y-6",
      )}
    >
      <div className="mt-9" />
      {props.data.map((group) => (
        <div key={group.category}>
          <SectionTitle title={t(group.category as never)} />
          <div className="not-prose">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {group.items.map((item) => {
                const flags = [item.showcase, item.principle_diagram]
                const urls = ["showcase", "principle_diagram"]
                return (
                  <Card
                    key={item.name} className="relative overflow-hidden flex flex-col border-b">
                    {flags.some(item => item === true) && (
                      <Carousel
                        className="shrink-0 w-full _max-w-sm"
                        opts={{
                          loop: true,
                        }}
                      >
                        <CarouselContent>
                          {flags.map((flag, index) => {
                            if (!flag) return null
                            return (
                              <CarouselItem key={index}>
                                <div className="relative max-h-48">
                                  <AspectRatio ratio={16 / 9} />
                                  <div className="absolute top-0 left-0 w-full h-full">
                                    <Image
                                      className="w-full h-full object-cover"
                                      width={1000}
                                      height={1000}
                                      src={`${props.assetsPrefix || ""}/${urls[index]}/${item.name}.jpg`}
                                      alt=""
                                      // unoptimized
                                    />
                                  </div>
                                </div>
                              </CarouselItem>
                            )
                          })}
                        </CarouselContent>
                        {flags.filter(item => !!item).length > 1 && (
                          <Fragment>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Fragment>
                        )}
                      </Carousel>
                    )}

                    <div className="px-4 pt-3 _text-sm font-bold">
                      {item.name}
                    </div>
                    <div className="px-4 pt-2 pb-3 flex flex-wrap _flex-col gap-3 text-xs">
                      {item.arxiv && (
                        <Link href={item.arxiv}>
                          <div className={linkButtonClass}>
                            <ArxivIcon className="w-4 h-4 mr-1.5" />
                            Arxiv
                          </div>
                        </Link>
                      )}
                      {item.github && (
                        <Link href={item.github}>
                          <div className={linkButtonClass}>
                            <GitHubIcon className="w-4 h-4 mr-1.5" />
                            Github
                          </div>
                        </Link>
                      )}
                      {item.hugging_face && (
                        <Link href={item.hugging_face}>
                          <div className={linkButtonClass}>
                            <HuggingFaceIcon className="w-4 h-4 mr-1.5" />
                            Hugging Face
                          </div>
                        </Link>
                      )}
                      {item.project_website && (
                        <Link href={item.project_website}>
                          <div className={linkButtonClass}>
                            <GlobeIcon className="w-4 h-4 mr-1.5" />
                            Website
                          </div>
                        </Link>
                      )}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}