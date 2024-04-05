
import { useTranslations } from "next-intl";
import { HeaderPadding } from "@/components/Header";
import { SectionHero } from "@/app/[locale]/(common)/SectionHero";

export default function Page() {
  const t = useTranslations("qrcodes.g1");

  return (
    <div>
      <HeaderPadding />
      <SectionHero />
    </div>
  );
}
