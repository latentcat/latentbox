import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";
import imgDiffuseum from "./diffuseum-podcast.jpg"
import Image from "next/image"
import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "@/navigation";
import { ContributorById } from "@/components/Contributors";

export interface ResourceItem {
  id: string
  title: string
  content: React.ReactNode
  xiaoyuzhou: string
  authors: string[]
}


export function useData() {
  const t = useTranslations("docs.diffuseum")

  const markups = {
    p: (chunks: ReactNode) => <p>{chunks}</p>
  }

  const data: ResourceItem[] = [
    {
      id: "1",
      title: t("ep1.title"),
      content: t.rich("ep1.content", markups),
      xiaoyuzhou: "https://www.xiaoyuzhoufm.com/episode/65df04989bf20df4c86f6523",
      authors: ["luosiallen"],
    },
    {
      id: "2",
      title: t("ep2.title"),
      content: t.rich("ep2.content", markups),
      xiaoyuzhou: "https://www.xiaoyuzhoufm.com/episode/660953101519139e4fb4c9a8",
      authors: ["haofanwang", "op7418"],
    },
  ];

  return data
}

export function Podcasts() {
  const data = useData()
  return (
    <div className="not-prose flex flex-col border-b">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-t py-9 flex gap-9 flex-col lg:flex-row"
        >
          <div className="flex flex-col items-start shrink-0">
            <div className="relative">
              <Image
                src={imgDiffuseum}
                alt=""
                className="w-48 h-48 rounded-md opacity-50"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <Link href={item.xiaoyuzhou} target="_blank">
                  <PlayIcon className="w-14 h-14 text-foreground" />
                </Link>
              </div>
            </div>
            <h3 className="mt-6 text-3xl leading-6 font-bold text-foreground">
              <span
                className="bg-gradient-to-b from-foreground via-foreground/70 to-foreground/60 inline-block text-transparent bg-clip-text _py-0.5">
                EP.{item.id}
              </span>
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-foreground">
              {item.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {item.authors.map((author, index) => (
                <ContributorById key={author} id={author} />
              ))}
            </div>
            <div
              className="mt-3 flex flex-col gap-3"
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}