import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CollectionGroupProps, CollectionItemProps, useCollectionData } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CollectionGroup } from "@/components/collection/CollectionView";



export default function Page() {

  const t = useTranslations("docs.collections")
  const { collectionList } = useCollectionData();

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
    >

      <div className="w-full flex flex-col items-start gap-9 not-prose">
        {collectionList.map((item, index) => (
          <CollectionGroup
            key={index}
            {...item}
          />
        ))}
      </div>

    </ArticleLayout>
  )
}

export async function generateMetadata({
                                         params: { locale }
                                       }: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.collections" });

  return {
    title: t("title")
    // description: t("subtitle"),
  };
}