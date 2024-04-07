import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import imageHero from "../../../../../../public/assets/resources/latentbox-hero.svg";


export default function Page() {
  return (
    <ArticleLayout
      title="Follow Us"
      intro=""
      authors={["zheishei", "SuiyuanV"]}
    >
      <h2>
        What is Latent Box
      </h2>


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