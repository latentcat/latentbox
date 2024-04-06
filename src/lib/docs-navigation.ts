
import React from "react";
import { useTranslations } from "next-intl";

export interface CollectionItemProps {
  id: string;
  name: string;
  desc: string;
  tag?: string;
}


export function useCollectionData() {
  const t = useTranslations("docs");
  const collectionList: CollectionItemProps[] = [
    {
      id: "latent-cat-stack",
      name: t("latent-cat-stack.title"),
      desc: t("latent-cat-stack.desc"),
    },
  ] as const;
  return {
    collectionList,
  };
}

export interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
    tag?: string
  }>;
}


export function useNavData() {
  const t = useTranslations("nav");
  const { collectionList } = useCollectionData();
  const navigation: NavGroup[] = [
    {
      title: t("getting_started"),
      links: [
        { title: t("introduction"), href: "/docs" },
        { title: t("contributing"), href: "/docs/contributing" },
        { title: t("changelog"), href: "/docs/changelog" },
      ],
    },
    {
      title: t("collection"),
      links: [
        ...collectionList.map((item, index) => ({
          title: item.name,
          href: "/" + item.id,
        })),
      ],
    },
  ] as const;
  return {
    navigation,
  };
}
