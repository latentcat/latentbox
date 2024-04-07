import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import imageHero from "../../../../../../public/assets/resources/latentbox-hero.svg"
import Image from "next/image"
import { useTranslations } from "next-intl";
import Contributors from "@/components/Contributors";


export default function Page() {

  const t = useTranslations("docs.introduction")

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
    >

      <h2>
        {t("what_is_latent_box")}
      </h2>

      <h2>
        {t("contributors")}
      </h2>

      <Contributors />

      <Image
        className="border rounded-lg"
        src={imageHero}
        alt=""
      />

    </ArticleLayout>
  )
}

export async function generateMetadata({
                                         params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "index.hero" });

  return {
    title: t("title"),
    // description: t("subtitle"),
  };
}