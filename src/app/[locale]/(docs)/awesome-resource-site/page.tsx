import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { dataAI, dataProduct, dataWeb } from "@/app/[locale]/(docs)/awesome-resource-site/data";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations("docs.awesome-resource-site")
  const assetsPrefix = "/assets/collections/awesome-resource-site"

  return (
    <ArticleLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("web")} />
      <GalleryView data={dataWeb} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("ai")} />
      <GalleryView data={dataAI} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("product")} />
      <GalleryView data={dataProduct} assetsPrefix={assetsPrefix} />

    </ArticleLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-resource-site" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}