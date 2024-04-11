import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import data from "./data";
import { GalleryView } from "@/components/collection/GalleryView";


export default function Page() {
  const t = useTranslations("docs.awesome-unity")
  const assetsPrefix = "/assets/collections/awesome-unity"


  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "Leozzz7988"]}
    >

      <SectionTitle title={t("getting_started")} />
      <GalleryView data={data.dataGettingStarted} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("csharp")} />
      <GalleryView data={data.dataCSharp} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("shader_graph")} />
      <GalleryView data={data.dataShaderGraph} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("vfx_graph")} />
      <GalleryView data={data.dataVFXGraph} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("nav_mesh")} />
      <GalleryView data={data.dataNavMesh} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("programming")} />
      <GalleryView data={data.dataProgramming} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("terrain")} />
      <GalleryView data={data.dataTerrain} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("master")} />
      <GalleryView data={data.dataMaster} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("advanced_reference")} />
      <GalleryView data={data.dataAdvancedReference} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("unity_official")} />
      <GalleryView data={data.dataUnityOfficial} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("jetbrains")} />
      <GalleryView data={data.dataJetBrains} assetsPrefix={assetsPrefix} />

      <SectionTitle title={t("vrchat")} />
      <GalleryView data={data.dataVRChat} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-unity" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}