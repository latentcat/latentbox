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


const linkButtonClass="rounded-full"


export function PaperView(props: GalleryViewProps) {

  const t = useTranslations(props.namespace as any);

  return (
    <div
      className={cn(
        "",
        "grid",
        "gap-6",
      )}
    >
      {props.data.map((group) => (
        <div key={group.category}>
          <SectionTitle title={t(group.category as never)} />
          <div className="not-prose">
            <Accordion
              type="multiple"
            >
              {group.items.map((item) => {
                const flags = [item.showcase, item.principle_diagram]
                const urls = ["showcase", "principle_diagram"]
                return (
                  <AccordionItem
                    key={item.name}
                    value={item.name}
                  >
                    <AccordionTrigger>{item.name}</AccordionTrigger>
                    <AccordionContent>
                      <div className="w-full flex flex-col items-start lg:flex-row gap-6">

                        {flags.some(item => item === true) && (
                          <Carousel
                            className="shrink-0 w-full max-w-sm"
                            opts={{
                              loop: true,
                            }}
                          >
                            <CarouselContent>
                              {flags.map((flag, index) => {
                                if (!flag) return null
                                return (
                                  <CarouselItem key={index}>
                                    <div className="">
                                      <Card className="relative overflow-hidden">
                                        <AspectRatio ratio={4/3} />
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
                                      </Card>
                                    </div>
                                  </CarouselItem>
                                )
                              })}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        )}

                        <div className="grow flex flex-wrap _flex-col gap-0">
                          {item.arxiv && (
                            <Link href={item.arxiv}>
                              <Button variant="ghost" className={linkButtonClass}>
                                <ArxivIcon className="w-4 h-4 mr-2" />
                                Arxiv
                              </Button>
                            </Link>
                          )}
                          {item.github && (
                            <Link href={item.github}>
                              <Button variant="ghost" className={linkButtonClass}>
                                <GitHubIcon className="w-4 h-4 mr-2" />
                                Github
                              </Button>
                            </Link>
                          )}
                          {item.hugging_face && (
                            <Link href={item.hugging_face}>
                              <Button variant="ghost" className={linkButtonClass}>
                                <HuggingFaceIcon className="w-4 h-4 mr-2" />
                                Hugging Face
                              </Button>
                            </Link>
                          )}
                          {item.project_website && (
                            <Link href={item.project_website}>
                              <Button variant="ghost" className={linkButtonClass}>
                                <GlobeIcon className="w-4 h-4 mr-2" />
                                Website
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  )
}