import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { dataAnime, dataInternet, dataMJ } from "@/app/[locale]/(docs)/image-datasets/data";
import { ListView } from "@/components/collection/ListView";


export default function Page() {
  const t = useTranslations("docs.image-datasets")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("internet")} />
      <ListView data={dataInternet} />

      <SectionTitle title={t("midjourney")} />
      <ListView data={dataMJ} />

      <SectionTitle title={t("anime")} />
      <ListView data={dataAnime} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.image-datasets" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}