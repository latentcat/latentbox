import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import { visTool } from "./data";


export default function Page() {
  const t = useTranslations("docs.vis-tools")
  const assetsPrefix = "/assets/collections/vis-tools"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["Leozzz7988"]}
    >
      <ProductView data={visTool} assetsPrefix={assetsPrefix} />
    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.vis-tools" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}