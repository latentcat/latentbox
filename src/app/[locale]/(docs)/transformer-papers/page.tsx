import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PaperView } from "@/components/collection/PaperView";
import data from "@/app/[locale]/(docs)/transformer-papers/data.json";

export default function Page() {
  const t = useTranslations("docs.transformer-papers");
  const assetsPrefix = "/assets/collections/transformer-papers";


  return (
    <CollectionLayout title={t("title")} intro={t("desc")}>
      <PaperView
        namespace="docs.transformer-papers"
        data={data}
        assetsPrefix={assetsPrefix}
      />
    </CollectionLayout>
  );
}

export async function generateMetadata({
                                         params: { locale }
                                       }: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({
    locale,
    namespace: "docs.transformer-papers"
  });

  return {
    title: t("title"),
    description: t("desc")
  };
}
