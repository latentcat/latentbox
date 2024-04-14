import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { ProductView } from "@/components/collection/ProductView";


import data from "./data";
import { GalleryView } from "@/components/collection/GalleryView";


export default function Page() {
  const t = useTranslations("docs.midi-controllers")

  const assetsPrefix = "/assets/collections/midi-controllers";

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["headboxer", "zheishei", "ciaochaos"]}
    >

      {data.map((d, index) => (
        <Fragment
          key={index}
        >
          <SectionTitle title={d.category} />
          <GalleryView data={d.items} assetsPrefix={assetsPrefix} />
        </Fragment>
      ))}

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.midi-controllers" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}