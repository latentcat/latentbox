
import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  BookTypeIcon,
  BoxesIcon, BracesIcon,
  BrainIcon, ComponentIcon,
  FileImageIcon, GlobeIcon, GraduationCap,
  Grid3X3Icon,
  ImagesIcon, Layers3Icon, LayoutGrid, PackageIcon, Paintbrush2Icon,
  Palette, PaletteIcon,
  PenToolIcon,
  PodcastIcon, Rotate3DIcon, ScanEyeIcon, SlidersVertical, SlidersVerticalIcon
} from "lucide-react";

export interface CollectionItemProps {
  id: string;
  name: string;
  desc: string;
  tag?: string;
  background?: string;
  icon?: (props: ComponentPropsWithoutRef<"svg">) => ReactNode
}

export interface CollectionGroupProps {
  title: string;
  links: Array<CollectionItemProps>;
}


export function useCollectionData() {
  const t = useTranslations("docs");
  const collectionList: CollectionGroupProps[] = [
    {
      title: t("group.ai"),
      links: [
        {
          id: "sd-ecology",
          name: t("sd-ecology.title"),
          desc: t("sd-ecology.desc"),
          background: "linear-gradient(293.07deg, #FFEBB7 0%, #FFCA41 24.44%, #FF687C 62.61%, #C464FF 100%)",
          icon: BrainIcon,
        },
        {
          id: "diffuseum",
          name: t("diffuseum.title"),
          desc: t("diffuseum.desc"),
          background: "linear-gradient(293.07deg, #FFEBB7 0%, #FFCA41 24.44%, #FF687C 62.61%, #C464FF 100%)",
          icon: PodcastIcon,
        },
        {
          id: "transformer-papers",
          name: t("transformer-papers.title"),
          desc: t("transformer-papers.desc"),
          background: "linear-gradient(293.07deg, #FFEBB7 0%, #FFCA41 24.44%, #FF687C 62.61%, #C464FF 100%)",
          icon: Grid3X3Icon,
          tag: "WIP",
        },
        {
          id: "image-datasets",
          name: t("image-datasets.title"),
          desc: t("image-datasets.desc"),
          background: "linear-gradient(293.07deg, #FFEBB7 0%, #FFCA41 24.44%, #FF687C 62.61%, #C464FF 100%)",
          icon: ImagesIcon,
        },
        {
          id: "awesome-ai-products",
          name: t("awesome-ai-products.title"),
          desc: t("awesome-ai-products.desc"),
          background: "linear-gradient(293.07deg, #FFEBB7 0%, #FFCA41 24.44%, #FF687C 62.61%, #C464FF 100%)",
          icon: BoxesIcon,
        },
      ]
    },
    {
      title: t("group.art"),
      links: [
        {
          id: "digital-art-tools",
          name: t("digital-art-tools.title"),
          desc: t("digital-art-tools.desc"),
          background: "linear-gradient(114.38deg, #DB8EFF 0%, #0967F5 48.9%, rgba(255, 227, 231, 0.906327) 86.73%)",
          icon: PenToolIcon,
        },
        {
          id: "digital-artists",
          name: t("digital-artists.title"),
          desc: t("digital-artists.desc"),
          background: "linear-gradient(114.38deg, #DB8EFF 0%, #0967F5 48.9%, rgba(255, 227, 231, 0.906327) 86.73%)",
          icon: PaletteIcon,
          tag: "WIP",
        },
        {
          id: "midi-controllers",
          name: t("midi-controllers.title"),
          desc: t("midi-controllers.desc"),
          background: "linear-gradient(114.38deg, #DB8EFF 0%, #0967F5 48.9%, rgba(255, 227, 231, 0.906327) 86.73%)",
          icon: SlidersVerticalIcon,
        },
        {
          id: "gen-art-algorithm",
          name: t("gen-art-algorithm.title"),
          desc: t("gen-art-algorithm.desc"),
          background: "linear-gradient(114.38deg, #DB8EFF 0%, #0967F5 48.9%, rgba(255, 227, 231, 0.906327) 86.73%)",
          icon: BracesIcon,
          tag: "WIP",
        },
      ]
    },
    {
      title: t("group.design"),
      links: [
        {
          id: "design-resources",
          name: t("design-resources.title"),
          desc: t("design-resources.desc"),
          background: "linear-gradient(113.96deg, #FFD600 0%, #FF872F 27.1%, #C286FF 76.57%, #F3E7FF 100%)",
          icon: ComponentIcon,
          tag: "WIP",
        },
        {
          id: "open-source-fonts",
          name: t("open-source-fonts.title"),
          desc: t("open-source-fonts.desc"),
          background: "linear-gradient(113.96deg, #FFD600 0%, #FF872F 27.1%, #C286FF 76.57%, #F3E7FF 100%)",
          icon: BookTypeIcon,
        },
      ]
    },
    {
      title: t("group.web"),
      links: [
        {
          id: "awesome-web3d",
          name: t("awesome-web3d.title"),
          desc: t("awesome-web3d.desc"),
          background: "linear-gradient(293.96deg, #98FFF9 0%, #19C8FF 19.55%, #FF2A55 63.83%, #B499FF 100%)",
          icon: GlobeIcon,
        },
      ]
    },
    {
      title: t("group.dev"),
      links: [
        {
          id: "latent-cat-stack",
          name: t("latent-cat-stack.title"),
          desc: t("latent-cat-stack.desc"),
          background: "linear-gradient(113.96deg, #02B755 0%, #4C4AC4 25.59%, #C892FF 82.79%, #F1E2FF 100%)",
          icon: Layers3Icon,
        },
        {
          id: "python-5-libs",
          name: t("python-5-libs.title"),
          desc: t("python-5-libs.desc"),
          background: "linear-gradient(113.96deg, #02B755 0%, #4C4AC4 25.59%, #C892FF 82.79%, #F1E2FF 100%)",
          icon: PackageIcon,
          tag: "WIP",
        },
      ]
    },
    {
      title: t("group.game"),
      links: [
        {
          id: "awesome-unity",
          name: t("awesome-unity.title"),
          desc: t("awesome-unity.desc"),
          background: "linear-gradient(113.96deg, #3B3B3B 0%, #080808 38.22%, #535353 77.54%, #A8A8A8 86.62%, #FFFFFF 100%)",
          icon: Rotate3DIcon,
        },
      ]
    },
    {
      title: t("group.vis"),
      links: [
        {
          id: "vis-tools",
          name: t("vis-tools.title"),
          desc: t("vis-tools.desc"),
          background: "linear-gradient(112.91deg, #12C6FF 0%, #8941FF 22.55%, #FF99A6 58.9%, #FFBF5F 87.67%, #FFFBD4 100%)",
          icon: Paintbrush2Icon,
          tag: "WIP",
        },
        {
          id: "vis-websites",
          name: t("vis-websites.title"),
          desc: t("vis-websites.desc"),
          background: "linear-gradient(112.91deg, #12C6FF 0%, #8941FF 22.55%, #FF99A6 58.9%, #FFBF5F 87.67%, #FFFBD4 100%)",
          icon: ScanEyeIcon,
          tag: "WIP",
        },
      ]
    },
    {
      title: t("group.miscellaneous"),
      links: [
        {
          id: "edu-free",
          name: t("edu-free.title"),
          desc: t("edu-free.desc"),
          background: "linear-gradient(113.96deg, #16859D 0.53%, #1E4849 25.76%, #2B6751 46.63%, #9BE056 86.5%, #F6FF8D 100%)",
          icon: GraduationCap,
        },
        {
          id: "awesome-resource-sites",
          name: t("awesome-resource-sites.title"),
          desc: t("awesome-resource-sites.desc"),
          background: "linear-gradient(113.96deg, #16859D 0.53%, #1E4849 25.76%, #2B6751 46.63%, #9BE056 86.5%, #F6FF8D 100%)",
          icon: LayoutGrid,
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
  const t = useTranslations();
  const { collectionList } = useCollectionData();
  const navigation: NavGroup[] = [
    {
      title: t("nav.getting_started"),
      links: [
        { title: t("docs.introduction.title"), href: "/docs" },
        { title: t("docs.follow-us.title"), href: "/docs/follow-us" },
        { title: t("docs.contributing.title"), href: "/docs/contributing" },
        { title: t("docs.collections.title"), href: "/docs/collections" },
      ],
    },
    ...collectionList.map((group, groupIndex) => (
      {
        title: group.title,
        links: [
          ...group.links.map((item, index) => ({
            title: item.name,
            href: "/" + item.id,
            tag: item.tag
          })),
        ],
      }
    )),
  ] as const;
  return {
    navigation,
  };
}
