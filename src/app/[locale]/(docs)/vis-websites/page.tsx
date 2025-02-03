import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import { visWebsite } from "./data";


export default function Page() {
  const t = useTranslations("docs.vis-websites")
  const assetsPrefix = "/assets/collections/vis-websites"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "zheishei", "Leozzz7988"]}
    >
      <ProductView data={visWebsite} assetsPrefix={assetsPrefix} />
    </CollectionLayout>
  )
}

export async function generateMetadata({
                                         params: { locale },
                                       }: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.vis-websites" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}