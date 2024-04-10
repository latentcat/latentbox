import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import data from "./data.json";
import { Fragment } from "react";
import { Link } from "@/navigation";

export default function Page() {
  const t = useTranslations("docs.transformer-papers");

  return (
    <CollectionLayout title={t("title")} intro={t("desc")}>
      {data.map((group) => (
        <Fragment key={group.category}>
          <SectionTitle title={t(group.category as any)} />
          <div>
            {group.items.map((item) => (
              <div key={item.name}>
                <div>{item.name}</div>
                <Link href={item.arxiv}>Arxiv</Link>
                <Link href={item.github}>Github</Link>
                <Link href={item.hugging_face}>HuggingFace</Link>
                <Link href={item.project_website}>Website</Link>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </CollectionLayout>
  );
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({
    locale,
    namespace: "docs.transformer-papers",
  });

  return {
    title: t("title"),
    description: t("desc"),
  };
}
