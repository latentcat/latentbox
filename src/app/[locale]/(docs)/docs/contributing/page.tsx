import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Page() {
  const t = useTranslations("docs.contributing");

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
      authors={["cpunisher", "ciaochaos"]}
    >
      <h2>{t("h2-1")}</h2>
      <p>{t("p1-thanking")}</p>
      <p>{t("p2-tip")}</p>
      <p>
        {t("p3-help")}
        <Link href="https://twitter.com/nhciao" target="_blank">
          @nhciao
        </Link>
      </p>
      <h3>{t("h3-1")}</h3>
      <p>{t("p4-fork")}</p>
      <h3>{t("h3-2")}</h3>
      <pre>
        <code>git clone https://github.com/your-username/latentbox.git</code>
      </pre>
      <h3>{t("h3-3")}</h3>
      <pre>
        <code>cd latentbox</code>
      </pre>
      <h3>{t("h3-4")}</h3>
      <pre>
        <code>git checkout -b my-new-branch</code>
      </pre>
      <h3>{t("h3-5")}</h3>
      <pre>
        <code>yarn</code>
      </pre>
      <h3>{t("h3-6")}</h3>
      <p>{t("p5-pr")}</p>
      <p>{t("p6-accept")}</p>
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
