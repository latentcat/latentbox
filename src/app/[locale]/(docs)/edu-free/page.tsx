import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { data } from "@/app/[locale]/(docs)/edu-free/data";
import { ListView } from "@/components/collection/ListView";


export default function Page() {
  const t = useTranslations("docs.edu-free")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos"]}
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
  const t = await getTranslations({ locale, namespace: "docs.edu-free" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}