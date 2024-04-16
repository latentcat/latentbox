import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PaperView } from "@/components/collection/PaperView";
import data from "./data.json";
import HoudiniNodeTree from "@/app/[locale]/(docs)/houdini-nodes/HoudiniNodeTree";

export default function Page() {
  const t = useTranslations("docs.sd-ecology");
  const assetsPrefix = "/assets/collections/sd-ecology";

  const radialClusterTreeData = {
    name: "Stable Diffusion",
    children: data.map((d) => ({
      name: d.category,
      children: d.items.map((t) => ({
        name: t.tool,
        children: t.items.map((n) => ({
          name: n,
          value: 0,
        })),
      })),
    })),
  };

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={[
        "ciaochaos",
      ]}
    >
      <HoudiniNodeTree data={radialClusterTreeData} />

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
