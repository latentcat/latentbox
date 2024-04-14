import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

import zh from "./zh.mdx";
import en from "./en.mdx";

const localedPages = {
  zh,
  en,
};

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("docs.contributing");
  const LocaledComponent = localedPages[locale as keyof typeof localedPages];

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
      authors={["cpunisher", "chenbaiyujason"]}
    >
      <LocaledComponent />
    </ArticleLayout>
  );
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
