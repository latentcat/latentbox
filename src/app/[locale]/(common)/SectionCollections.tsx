import { LatentBoxLogo } from "@/components/Logos";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GitHubButton } from "@/components/GitHubButton";
import { HeaderPadding } from "@/components/Header";
import { Container, ContainerFull } from "@/components/Containers";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { DiscordIcon, XhsIcon, XIcon } from "@/components/LogosBrand";
import { CollectionGroupProps, CollectionItemProps, useCollectionData } from "@/lib/docs_navigation";
import { Separator } from "@/components/ui/separator";


function CollectionLink(props: CollectionItemProps) {
  return (
    <Link
      href={`/${props.id}`}
      className="basis-full sm:basis-1/2 md:basis-1/3 py-2 px-4 _bg-foreground/5 hover:bg-accent transition rounded-md"
    >
      <div className="text-center  line-clamp-1">
        {props.name}
      </div>
    </Link>
  )
}


function CollectionGroup(props: CollectionGroupProps) {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      <h3 className="text-base font-bold mb-2">
        {props.title}
      </h3>
      <Separator className="my-3" />
      <div className="w-full flex flex-row flex-wrap justify-center _gap-[2px]">
        {props.links.map((item, index) => (
          <CollectionLink
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}


export function SectionCollections() {
  const t = useTranslations("index.collections");
  const { collectionList } = useCollectionData();
  return (
    <div
      className="py-12">
      <Container>
        <div className="flex flex-col items-center ">

          <h2 className="text-2xl font-bold text-center">
            {t("title")}
          </h2>

          <div className="h-9" />

          <div className="w-full flex flex-col items-center gap-9">
            {collectionList.map((item, index) => (
              <CollectionGroup
                key={index}
                {...item}
              />
            ))}
          </div>


        </div>
      </Container>
    </div>
  )
}