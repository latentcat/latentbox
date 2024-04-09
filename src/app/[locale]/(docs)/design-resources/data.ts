import { ResourceItem } from "@/lib/data_types";


export const dataDesignSystem: ResourceItem[] = [
  {
    id: "google",
    name: "Google - Material Design",
    url: "https://m3.material.io/",
  },
  {
    id: "apple",
    name: "Apple - Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines",
  },
  {
    id: "adobe",
    name: "Adobe - Spectrum",
    url: "https://spectrum.adobe.com/",
  },
];

export const dataColorTool: ResourceItem[] = [
  {
    id: "colorhunt",
    name: "Colorhunt",
    url: "https://colorhunt.co/",
  },
  {
    id: "color-space",
    name: "Color Space",
    url: "https://mycolor.space/",
  },
  {
    id: "huemint",
    name: "Huemint",
    url: "https://huemint.com/",
  },
];



const data = {
  dataDesignSystem,
  dataColorTool,
}


export default data