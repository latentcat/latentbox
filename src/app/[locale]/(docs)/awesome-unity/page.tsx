import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import data from "./data";


export default function Page() {
  const t = useTranslations("docs.awesome-unity")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("getting_started")} />
      <ListView data={data.dataGettingStarted} />

      <SectionTitle title={t("csharp")} />
      <ListView data={data.dataCSharp} />

      <SectionTitle title={t("shader_graph")} />
      <ListView data={data.dataShaderGraph} />

      <SectionTitle title={t("vfx_graph")} />
      <ListView data={data.dataVFXGraph} />

      <SectionTitle title={t("nav_mesh")} />
      <ListView data={data.dataNavMesh} />

      <SectionTitle title={t("programming")} />
      <ListView data={data.dataProgramming} />

      <SectionTitle title={t("terrain")} />
      <ListView data={data.dataTerrain} />

      <SectionTitle title={t("master")} />
      <ListView data={data.dataMaster} />

      <SectionTitle title={t("advanced_reference")} />
      <ListView data={data.dataAdvancedReference} />

      <SectionTitle title={t("unity_official")} />
      <ListView data={data.dataUnityOfficial} />

      <SectionTitle title={t("jetbrains")} />
      <ListView data={data.dataJetBrains} />

      <SectionTitle title={t("vrchat")} />
      <ListView data={data.dataVRChat} />

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