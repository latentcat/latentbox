
import React from "react";
import { useTranslations } from "next-intl";

export interface CollectionItemProps {
  id: string;
  name: string;
  desc: string;
  tag?: string;
}

export interface CollectionGroupProps {
  title: string;
  links: Array<CollectionItemProps>;
}


export function useCollectionData() {
  const t = useTranslations("docs");
  const collectionList: CollectionGroupProps[] = [
    {
      title: "AI",
      links: [
        {
          id: "sd-ecology",
          name: t("sd-ecology.title"),
          desc: t("sd-ecology.desc"),
        },
        {
          id: "transformer-papers",
          name: t("transformer-papers.title"),
          desc: t("transformer-papers.desc"),
        },
        {
          id: "image-datasets",
          name: t("image-datasets.title"),
          desc: t("image-datasets.desc"),
        },
      ]
    },
    {
      title: "Art",
      links: [
        {
          id: "digital-artists",
          name: t("digital-artists.title"),
          desc: t("digital-artists.desc"),
        },
        {
          id: "digital-art-tools",
          name: t("digital-art-tools.title"),
          desc: t("digital-art-tools.desc"),
        },
        {
          id: "midi-controllers",
          name: t("midi-controllers.title"),
          desc: t("midi-controllers.desc"),
        },
        {
          id: "gen-art-algorithm",
          name: t("gen-art-algorithm.title"),
          desc: t("gen-art-algorithm.desc"),
        },
      ]
    },
    {
      title: "Web",
      links: [
        {
          id: "awesome-web3d",
          name: t("awesome-web3d.title"),
          desc: t("awesome-web3d.desc"),
        },
        {
          id: "latent-cat-stack",
          name: t("latent-cat-stack.title"),
          desc: t("latent-cat-stack.desc"),
        },
      ]
    },
    {
      title: "Dev",
      links: [
        {
          id: "python-5-libs",
          name: t("python-5-libs.title"),
          desc: t("python-5-libs.desc"),
        },
      ]
    },
    {
      title: "Game",
      links: [
        {
          id: "awesome-unity",
          name: t("awesome-unity.title"),
          desc: t("awesome-unity.desc"),
        },
      ]
    },
    {
      title: "Vis",
      links: [
        {
          id: "vis-tools",
          name: t("vis-tools.title"),
          desc: t("vis-tools.desc"),
        },
        {
          id: "vis-website",
          name: t("vis-website.title"),
          desc: t("vis-website.desc"),
        },
      ]
    },
    {
      title: "Miscellaneous",
      links: [
        {
          id: "edu-free",
          name: t("edu-free.title"),
          desc: t("edu-free.desc"),
        },
        {
          id: "awesome-resource-sites",
          name: t("awesome-resource-sites.title"),
          desc: t("awesome-resource-sites.desc"),
        },
      ]
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
    ...collectionList.map((group, groupIndex) => (
      {
        title: group.title,
        links: [
          ...group.links.map((item, index) => ({
            title: item.name,
            href: "/" + item.id,
          })),
        ],
      }
    )),
  ] as const;
  return {
    navigation,
  };
}
