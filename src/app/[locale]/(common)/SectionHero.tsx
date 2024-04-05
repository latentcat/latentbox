import { LatentBoxLogo } from "@/components/Logos";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { GitHubButton } from "@/components/GitHubButton";

export function SectionHero() {
  return (
    <div className="flex flex-col items-center py-12">
      <LatentBoxLogo ext="hero" className="h-32" />

      <div className="h-6" />

      <h2 className="text-4xl font-bold text-center">
        <span
          className="bg-gradient-to-b from-foreground via-foreground/70 to-foreground/60 inline-block text-transparent bg-clip-text py-0.5">
          Latent Box
        </span>
      </h2>

      <div className="h-6" />

      <div className="flex gap-4">
        <Link href="/a1">
          <Button>
            Introduction
          </Button>
        </Link>
        <Link href="https://github.com/latentcat/latentbox" target="_blank">
          <GitHubButton />
        </Link>
      </div>
    </div>
  )
}