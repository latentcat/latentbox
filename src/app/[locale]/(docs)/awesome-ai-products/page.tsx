import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import data, {
  data3D,
  dataDesign,
  dataDigitalHuman,
  dataImage,
  dataMusic,
  dataSearch,
  dataVideo,
  dataVoice
} from "./data";


export default function Page() {
  const t = useTranslations("docs.awesome-ai-products")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["HiMrHOW"]}
    >

      <SectionTitle title={t("llm-global")} />
      <ProductView data={data.dataLlmGlobal} />

      <SectionTitle title={t("llm-chinese")} />
      <ProductView data={data.dataLlmChinese} />

      <SectionTitle title={t("search")} />
      <ProductView data={data.dataSearch} />

      <SectionTitle title={t("image")} />
      <ProductView data={data.dataImage} />

      <SectionTitle title={t("video")} />
      <ProductView data={data.dataVideo} />

      <SectionTitle title={t("music")} />
      <ProductView data={data.dataMusic} />

      <SectionTitle title={t("voice")} />
      <ProductView data={data.dataVoice} />

      <SectionTitle title={t("digital-human")} />
      <ProductView data={data.dataDigitalHuman} />

      <SectionTitle title={t("3d")} />
      <ProductView data={data.data3D} />

      <SectionTitle title={t("design")} />
      <ProductView data={data.dataDesign} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-ai-products" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}