import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { Podcasts } from "@/app/[locale]/(docs)/diffuseum/components";


export default function Page() {
  const t = useTranslations("docs.diffuseum")

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["gogodecay"]}
    >

      <Podcasts />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.diffuseum" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}