import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import data from "./data.json";
import { ListView } from "@/components/collection/ListViewSd";
import { PaperView } from "@/components/collection/PaperView";


export default function Page() {
  const t = useTranslations("docs.sd-ecology")
  const assetsPrefix = "/assets/collections/sd-ecology"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "chenbaiyujason", "huo-ju", "Dango233", "cpunisher", "Zhaohan-Wang"]}
    >

      <PaperView
        namespace="docs.sd-ecology"
        data={data}
        assetsPrefix={assetsPrefix}
      />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.sd-ecology" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}