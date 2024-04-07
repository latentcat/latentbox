import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { dataAI, dataPaper, dataProduct, dataWeb } from "@/app/[locale]/(docs)/awesome-resource-sites/data";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations("docs.awesome-resource-sites")
  const assetsPrefix = "/assets/collections/awesome-resource-sites"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "cpunisher"]}
    >

      <SectionTitle title={t("web")} />
      <GalleryView data={dataWeb} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("ai")} />
      <GalleryView data={dataAI} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("product")} />
      <GalleryView data={dataProduct} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("paper")} />
      <GalleryView data={dataPaper} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-resource-sites" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}