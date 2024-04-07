import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import imageHero from "../../../../../../public/assets/resources/latentbox-hero.svg"
import Image from "next/image"
import { useTranslations } from "next-intl";
import Contributors from "@/components/Contributors";
import { Link } from "@/navigation";
import { MidRealLogoFull } from "@/components/Logos";


export default function Page() {

  const t = useTranslations("docs.introduction")

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
      authors={["ciaochaos"]}
    >

      <h2>
        {t("what_is_latent_box")}
      </h2>

      <p>
        {t("p1")}
      </p>

      <ul>
        <li>
          <p>
            <b>{t("p2")}</b><br />
            {t("p3")}
          </p>
        </li>
        <li>
          <p>
            <b>{t("p4")}</b><br />
            {t("p5")}
          </p>
        </li>
        <li>
          <p>
            <b>{t("p6")}</b><br />
            {t("p7")}
          </p>
        </li>
      </ul>

      <p>
        {t("p8")}
      </p>

      <h2>
        {t("contributors")}
      </h2>

      <Contributors />


      <h2>
        {t("sponsor")}
      </h2>

      <Link
        href="https://midreal.ai"
        target="_blank"
      >
        <MidRealLogoFull className="h-12" />
      </Link>

    </ArticleLayout>
  )
}

export async function generateMetadata({
                                         params: { locale }
                                       }: Readonly<{
  params: { locale: string };
}>) {
  const t = await getTranslations({ locale, namespace: "docs.introduction" });

  return {
    title: t("title"),
    // description: t("subtitle"),
  };
}