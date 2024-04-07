import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";


export default function Page() {
  return (
    <ArticleLayout
      title="Contributing"
      intro="123"
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
  const t = await getTranslations({ locale, namespace: "index.hero" });

  return {
    title: t("title"),
    // description: t("subtitle"),
  };
}