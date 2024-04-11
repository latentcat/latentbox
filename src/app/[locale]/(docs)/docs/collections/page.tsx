import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CollectionGroupProps, CollectionItemProps, useCollectionData } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";


function CollectionLink(props: CollectionItemProps) {
  return (
    <Link
      href={`/${props.id}`}
      className="flex flex-col gap-2 items-center"
    >
      <AspectRatio
        ratio={16/9}
        style={{ background: props.background }}
        className="flex flex-col items-center justify-center rounded-lg _border"
      >
        {props.icon && (
          <props.icon className="w-16 h-16 text-white" />
        )}
      </AspectRatio>
      <div className="line-clamp-1">
        {props.name}
      </div>
    </Link>
  )
}


function CollectionGroup(props: CollectionGroupProps) {
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-xl font-bold mb-6">
        {props.title}
      </h3>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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