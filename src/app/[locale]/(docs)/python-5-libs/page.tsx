import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { ProductView } from "@/components/collection/ProductView";
import * as data from "./data"


export default function Page() {
  const t = useTranslations("docs.python-5-libs")
  const assetsPrefix =  "/assets/collections/python-5-libs"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("face_recognition")} />
      <ProductView data={data.FaceRecognition} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.python-5-libs" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}