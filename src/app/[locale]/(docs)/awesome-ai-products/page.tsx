import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import { Fragment } from "react";

import data from "./data";
import ProductTree, { ChartData } from "@/app/[locale]/(docs)/awesome-ai-products/ProductTree";

export default function Page() {
  const t = useTranslations("docs.awesome-ai-products");
  const assetsPrefix = "/assets/collections/awesome-ai-products";

  const radialClusterTreeData: ChartData = {
    name: t("title"),
    children: data.map((d) => ({
      name: t(d.category as never),
      children: d.items.map((item) => ({
        name: item.name,
        id: item.id,
        value: 0,
        iconType: item.iconType
      })),
    })),
  };

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["HiMrHOW", "ciaochaos", "zheishei", "LonelyFellas", "jw782cn", "aiyoudiao", "RayJason" ]}
    >
      <ProductTree data={radialClusterTreeData} assetsPrefix={assetsPrefix} />

      {data.map((d, index) => (
        <Fragment
          key={index}
        >
          <SectionTitle title={t(d.category as never)} />
          <ProductView data={d.items} assetsPrefix={assetsPrefix} />
        </Fragment>
      ))}

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
