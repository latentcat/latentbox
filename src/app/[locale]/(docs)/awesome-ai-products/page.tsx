import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import data, { json } from "./data";
import RadialClusterTree from "@/components/RadialClusterTree";

export default function Page() {
  const t = useTranslations("docs.awesome-ai-products");
  const assetsPrefix = "/assets/collections/awesome-ai-products";

  const radialClusterTreeData = {
    name: t("title"),
    children: json.map((d) => ({
      name: t(d.category as never),
      children: d.items.map((item) => ({
        name: item.name,
        value: 0,
      })),
    })),
  };

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["HiMrHOW", "ciaochaos", "zheishei", "LonelyFellas"]}
    >
      <RadialClusterTree data={radialClusterTreeData} />

      <SectionTitle title={t("llm-global")} />
      <ProductView data={data.dataLlmGlobal} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("llm-chinese")} />
      <ProductView data={data.dataLlmChinese} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("search")} />
      <ProductView data={data.dataSearch} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("image")} />
      <ProductView data={data.dataImage} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("video")} />
      <ProductView data={data.dataVideo} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("music")} />
      <ProductView data={data.dataMusic} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("voice")} />
      <ProductView data={data.dataVoice} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("digital-human")} />
      <ProductView data={data.dataDigitalHuman} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("3d")} />
      <ProductView data={data.data3D} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("design")} />
      <ProductView data={data.dataDesign} assetsPrefix={assetsPrefix} />
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
    namespace: "docs.awesome-ai-products",
  });

  return {
    title: t("title"),
    description: t("desc"),
  };
}
