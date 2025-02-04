import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SecondarySectionTitle, SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ListView } from "@/components/collection/ListView";
import data, {
  dataArtificialIntelligence,
  dataBioinspiredSimulation,
  dataComplexSystems,
  dataComputationalGeometry,
  dataProceduralNoise
} from "./data";

export default function Page() {
  const t = useTranslations("docs.gen-art-algorithm")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("nature_inspired_computation")} />

        <SecondarySectionTitle title={t("procedural_noise")} />
        <ListView data={data.dataProceduralNoise} />

        <SecondarySectionTitle title={t("computational_geometry")} />
        <ListView data={data.dataComputationalGeometry} />

        <SecondarySectionTitle title={t("complex_systems")} />
        <ListView data={data.dataComplexSystems} />

        <SecondarySectionTitle title={t("bio-inspired_simulation")} />
        <ListView data={data.dataBioinspiredSimulation} />

        <SecondarySectionTitle title={t("artificial_intelligence")} />
        <ListView data={data.dataArtificialIntelligence} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.gen-art-algorithm" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}