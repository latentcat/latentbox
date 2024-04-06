import { LatentBoxLogo } from "@/components/Logos";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GitHubButton } from "@/components/GitHubButton";
import { HeaderPadding } from "@/components/Header";
import { Container, ContainerFull } from "@/components/Containers";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { DiscordIcon, XhsIcon, XIcon } from "@/components/LogosBrand";
import { CollectionItemProps, useCollectionData } from "@/lib/docs-navigation";


function CollectionLink(props: CollectionItemProps) {
  return (
    <Link
      href={`/${props.id}`}
    >
      <div className="bg-foreground/5 hover:bg-accent transition px-4 py-2 rounded-md">
        {props.name}
      </div>
    </Link>
  )
}


export function SectionCollections() {
  const t = useTranslations("index.collections");
  const { collectionList } = useCollectionData()
  return (
    <div
      className="py-12">
      <Container>
        <div className="flex flex-col items-center ">

          <h2 className="text-2xl font-bold text-center">
            {t("title")}
          </h2>

          <div className="h-6" />

          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-3xl grid md:grid-cols-2 gap-[2px]">
              {collectionList.map((item, index) => (
                <CollectionLink
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}