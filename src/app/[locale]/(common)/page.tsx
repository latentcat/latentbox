
import { useTranslations } from "next-intl";
import { HeaderPadding } from "@/components/Header";
import { SectionHero } from "@/app/[locale]/(common)/SectionHero";
import { SectionSocial } from "@/app/[locale]/(common)/SectionSocial";
import { SectionCollections } from "@/app/[locale]/(common)/SectionCollections";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/Containers";

export default function Page() {

  return (
    <div>
      <SectionHero />
      
      <SectionSocial />
      {/*<Container>*/}
      {/*  <Separator />*/}
      {/*</Container>*/}
      <Separator />
      <SectionCollections />
    </div>
  );
}
