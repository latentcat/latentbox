import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";

import data from "./data";
import { ProductView } from "@/components/collection/ProductView";

export default function Page() {
  const t = useTranslations("docs.digital-art-tools")
  const assetsPrefix = "/assets/collections/digital-art-tools"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "zheishei", "vzhao-21"]}
    >

      <SectionTitle title={t("gen_art")} />
      <ProductView data={data.dataArt} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("3d_engine")} />
      <ProductView data={data.data3dEngine} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("3d_modeling")} />
      <ProductView data={data.data3dModeling} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("texture")} />
      <ProductView data={data.dataTexture} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("renderer")} />
      <ProductView data={data.dataRenderer} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("computing")} />
      <ProductView data={data.dataComputing} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("geometry")} />
      <ProductView data={data.dataGeometry} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("interaction")} />
      <ProductView data={data.dataInteraction} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("projection")} />
      <ProductView data={data.dataProjection} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("audio")} />
      <ProductView data={data.dataAudio} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("graphics_design")} />
      <ProductView data={data.dataDesign} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("prototype")} />
      <ProductView data={data.dataPrototype} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("photo_editing")} />
      <ProductView data={data.dataPhotoEditing} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("layout_design")} />
      <ProductView data={data.dataLayoutDesign} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("video_editing")} />
      <ProductView data={data.dataVideoEditing} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("composing")} />
      <ProductView data={data.dataComposing} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.digital-art-tools" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}