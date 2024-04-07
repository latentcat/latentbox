import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";


export default function Page() {

  const t = useTranslations("docs.contributing")

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
      authors={["cpunisher", "ciaochaos"]}
    >
      <h2>
        What is Latent Box
      </h2>
    </ArticleLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.contributing" });

  return {
    title: t("title"),
    // description: t("subtitle"),
  };
}