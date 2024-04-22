import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { useTranslations } from "next-intl";
import { dataWebCollection } from "./data";

export default function Page() {
  const t = useTranslations("docs.awesome-web-collection")
  const assetsPrefix = "/assets/collections/awesome-web-collection"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["RayJason"]}
    >
      <GalleryView data={dataWebCollection} assetsPrefix={assetsPrefix} />
    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-web-collection" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}