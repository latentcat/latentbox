import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";


export default function Page() {
  const t = useTranslations("docs.vis-websites")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
    >

      <SectionTitle title={t("title")} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.vis-websites" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}