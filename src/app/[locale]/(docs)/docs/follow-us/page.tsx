import { ArticleLayout } from "@/components/SimpleLayout";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import imageHero from "../../../../../../public/assets/resources/latentbox-hero.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { DiscordIcon, GitHubIcon, MpIcon, XhsIcon, XIcon } from "@/components/LogosBrand";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MailIcon } from "lucide-react";


export default function Page() {

  const t = useTranslations("docs.follow-us")

  return (
    <ArticleLayout
      title={t("title")}
      intro=""
      authors={["zheishei", "SuiyuanV"]}
    >

      <p>
        {t("p1")}
      </p>

      <p className="flex gap-4 flex-wrap">
        <Link href="https://twitter.com/latent_box" target="_blank">
          <Button variant="secondary" size="sm">
            <XIcon className="h-4 mr-2" />
            {t("x")}
          </Button>
        </Link>
        <Link href="https://discord.gg/V9CNuqYfte" target="_blank">
          <Button variant="secondary" size="sm">
            <DiscordIcon className="h-4 mr-2" />
            {t("discord")}
          </Button>
        </Link>
        <Link href="https://www.xiaohongshu.com/user/profile/660223ac000000000b00f2ce" target="_blank">
          <Button variant="secondary" size="sm">
            <XhsIcon className="h-4 mr-2" />
            {t("xiaohongshu")}
          </Button>
        </Link>
        <Link href="https://github.com/latentcat" target="_blank">
          <Button variant="secondary" size="sm">
            <GitHubIcon className="h-4 mr-2" />
            {t("github")}
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm">
              <MpIcon className="h-4 mr-2" />
              {t("wechat_mp")}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                微信公众号
              </DialogTitle>
              <DialogDescription className="text-center">
                WeChat Media Press
              </DialogDescription>
            </DialogHeader>
            <div className="w-full flex justify-center _sm:justify-start">
              <img src="/assets/resources/mp.jpg" alt="" className="w-36 h-36" />
            </div>
          </DialogContent>
        </Dialog>
      </p>


      <h2>
        {t("h2")}
      </h2>


      <p className="flex gap-4 flex-wrap">
        <Link href="mailto:contact@latentcat.com">
          <Button variant="secondary" size="sm">
            <MailIcon className="h-4 mr-2" />
            contact@latentcat.com
          </Button>
        </Link>
      </p>

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
  const t = await getTranslations({ locale, namespace: "docs.follow-us" });

  return {
    title: t("title"),
    // description: t("subtitle"),
  };
}