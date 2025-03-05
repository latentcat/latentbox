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
import { CollectionGroup } from "@/components/collection/CollectionView";



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