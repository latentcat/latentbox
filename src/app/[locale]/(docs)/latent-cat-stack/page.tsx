import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import * as data from "./data";

export default function Page() {
  const t = useTranslations("docs.latent-cat-stack");
  const assetsPrefix = "/assets/collections/latent-cat-stack";

  return (
    <CollectionLayout title={t("title")} intro={t("desc")}>
      <SectionTitle title={t("framework")} />
      <ProductView data={data.dataFramework} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("deploy")} />
      <ProductView data={data.dataDeploy} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("ui")} />
      <ProductView data={data.dataUI} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("library")} />
      <ProductView data={data.dataLibrary} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("iconset")} />
      <ProductView data={data.dataIconset} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("analytics")} />
      <ProductView data={data.dataAnalytics} assetsPrefix={assetsPrefix} />
    </CollectionLayout>
  );
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({
    locale,
    namespace: "docs.latent-cat-stack",
  });

  return {
    title: t("title"),
    description: t("desc"),
  };
}
