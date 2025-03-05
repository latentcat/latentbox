import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { GalleryView } from "@/components/collection/GalleryView";
import { useTranslations } from "next-intl";
import { dataWeb3D } from "./data";


export default function Page() {
  const t = useTranslations("docs.awesome-web3d")
  const assetsPrefix = "/assets/collections/awesome-web3d"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["ciaochaos", "RayJason"]}
    >
      <GalleryView data={dataWeb3D} assetsPrefix={assetsPrefix} />
    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-web3d" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}