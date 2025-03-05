import { CollectionLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import { SectionTitle } from "@/components/collection/SectionTitle";
import { useTranslations } from "next-intl";
import { WechatSvgView } from "@/app/[locale]/(docs)/awesome-wechat-svg/WechatSvgView";
import { data } from "./data";


export default function Page() {
  const t = useTranslations("docs.awesome-wechat-svg")
  const assetsPrefix = "/assets/collections/awesome-wechat-svg"

  return (
    <CollectionLayout
      title={t("title")}
      intro={t("desc")}
      authors={["yangzehaohandsome", "BbuBbuBe"]}
    >

      <WechatSvgView data={data} assetsPrefix={assetsPrefix} />

    </CollectionLayout>
  )
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.awesome-wechat-svg" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}