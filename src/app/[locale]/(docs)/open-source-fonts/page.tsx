import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import { data } from "./data";


export default function Page() {
  const t = useTranslations("docs.open-source-fonts")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["onemachi"]}
    >

      <ListView data={data} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.open-source-fonts" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}