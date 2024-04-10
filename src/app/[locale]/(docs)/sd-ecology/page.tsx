import { ArticleLayout, CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { data } from "@/app/[locale]/(docs)/sd-ecology/data";
import { ListView } from "@/components/collection/ListViewSd";


export default function Page() {
  const t = useTranslations("docs.sd-ecology")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "chenbaiyujason", "huo-ju", "Dango233", "cpunisher"]}
    >

      <SectionTitle title={t("Papers")} />
      <ListView data={data} />
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