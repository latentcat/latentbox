import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PaperView } from "@/components/collection/PaperView";
import data from "./data.json";
import RadialClusterTree from "@/components/vis/RadialClusterTree";

export default function Page() {
  const t = useTranslations("docs.sd-ecology");
  const assetsPrefix = "/assets/collections/sd-ecology";

  const radialClusterTreeData = {
    name: "Stable Diffusion",
    children: data.map((d) => ({
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
      authors={[
        "ciaochaos",
        "chenbaiyujason",
        "huo-ju",
        "Dango233",
        "cpunisher",
        "Zhaohan-Wang",
        "gogodecay",
        "xiaohu2015",
        "sdbds",
        "IDKiro",
      ]}
    >
      <RadialClusterTree data={radialClusterTreeData} />
      <PaperView
        namespace="docs.sd-ecology"
        data={data}
        assetsPrefix={assetsPrefix}
      />
    </CollectionLayout>
  );
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
