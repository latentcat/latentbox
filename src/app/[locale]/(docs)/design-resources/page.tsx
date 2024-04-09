import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import data, { dataDesignSystem } from "./data";


export default function Page() {
  const t = useTranslations("docs.design-resources")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("design_systems")} />
      <ListView data={data.dataDesignSystem} />

      <SectionTitle title={t("color_tools")} />
      <ListView data={data.dataColorTool} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.design-resources" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}