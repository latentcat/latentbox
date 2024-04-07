import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { dataWeb3D } from "@/app/[locale]/(docs)/awesome-web3d/data";


export default function Page() {
  const t = useTranslations("docs.awesome-web3d")
  const assetsPrefix = "/assets/collections/awesome-web3d"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <GalleryView data={dataWeb3D} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-web3d" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}