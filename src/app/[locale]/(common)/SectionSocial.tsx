import { LatentBoxLogo } from "@/components/Logos";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GitHubButton } from "@/components/GitHubButton";
import { HeaderPadding } from "@/components/Header";
import { ContainerFull } from "@/components/Containers";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { DiscordIcon, XhsIcon, XIcon } from "@/components/LogosBrand";
import { ChevronRightIcon } from "lucide-react";

export function SectionSocial() {
  const t = useTranslations("index.social");
  return (
    <div
      className="py-12">
      <ContainerFull>
        <div className="flex flex-col items-center ">

          <h2 className="text-2xl font-bold text-center">
            {t("title")}
          </h2>

          <div className="h-6" />

          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="https://twitter.com/latent_box" target="_blank">
              <Button variant="secondary" size="sm" className="rounded-full px-4">
                <XIcon className="h-4 mr-2"/>
                {t("x")}
              </Button>
            </Link>
            <Link href="https://discord.gg/V9CNuqYfte" target="_blank">
              <Button variant="secondary" size="sm" className="rounded-full px-4">
                <DiscordIcon className="h-4 mr-2" />
                {t("discord")}
              </Button>
            </Link>
            <Link href="https://www.xiaohongshu.com/user/profile/660223ac000000000b00f2ce" target="_blank">
              <Button variant="secondary" size="sm" className="rounded-full px-4">
                <XhsIcon className="h-4 mr-2" />
                {t("xiaohongshu")}
              </Button>
            </Link>
            <Link href="/docs/follow-us">
              <Button variant="ghost" size="sm" className="rounded-full px-4">
                {t("more")}
                <ChevronRightIcon className="w-4 h-4 ml-1 -mr-1"/>
              </Button>
            </Link>
          </div>

        </div>
      </ContainerFull>
    </div>
  )
}