import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CollectionGroupProps, CollectionItemProps, useCollectionData } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { Separator } from "@/components/ui/separator";


function CollectionLink(props: CollectionItemProps) {
  return (
    <Link
      href={`/${props.id}`}
      className="py-1 px-3 _bg-foreground/5 hover:bg-accent transition rounded-md"
    >
      <div className="line-clamp-1">
        {props.name}
      </div>
    </Link>
  )
}


function CollectionGroup(props: CollectionGroupProps) {
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-base font-bold mb-1">
        {props.title}
      </h3>
      <Separator className="my-2 hidden md:block" />
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 _gap-[2px]">
        {props.links.map((item, index) => (
          <CollectionLink
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

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