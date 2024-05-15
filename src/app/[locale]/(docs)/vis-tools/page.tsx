import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import { vistool } from "@/app/[locale]/(docs)/vis-tools/data";


export default function Page() {
  const t = useTranslations("docs.vis-tools")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["VicaYang"]}
    >

      <SectionTitle title={t("tool")} />
      <ListView data={vistool} />
    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.vis-tools" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}