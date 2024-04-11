import { Prose } from "@/components/Prose";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import { Feedback } from "@/components/Feedback";
import pick from "lodash/pick";
import { Footer } from "@/components/Footer";
import React from "react";

import { ContributorById } from "@/components/Contributors";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import { TableOfContent } from "./TableOfContent";

interface ArticleLayoutProps {
  category?: string;
  title: string;
  intro: string;
  authors?: string | string[];
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function ArticleLayoutWithoutProse(props: ArticleLayoutProps) {
  const authorIds = Array.isArray(props.authors)
    ? props.authors
    : props.authors !== undefined
      ? [props.authors]
      : [];

  return (
    <div className="flex flex-col items-center">
      <TableOfContent />
      <div className="w-full max-w-5xl min-h-screen">
        <header className="mt-12">
          {props.category && (
            <p className="_font-bold text-lg text-foreground/70 mb-4">
              {props.category}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 _sm:text-5xl">
            {props.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {props.intro}
          </p>
          {authorIds && (
            <div className="mt-6 flex flex-wrap gap-3">
              {authorIds.map((author, index) => (
                <ContributorById key={author} id={author} />
              ))}
            </div>
          )}
        </header>
        {props.children}
      </div>
    </div>
  );
}

export function ArticleLayout(props: ArticleLayoutProps) {
  const { children, ...rest } = props;
  return (
    <ArticleLayoutWithoutProse {...rest}>
      <Prose className="mt-12 mb-16 break-words" data-mdx-content>
        {children}
      </Prose>
      <Footer />
    </ArticleLayoutWithoutProse>
  );
}

interface CollectionLayoutProps {
  title: string;
  intro: string;
  authors?: string | string[];
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function CollectionLayout({ children, ...rest }: CollectionLayoutProps) {
  const t = useTranslations("CollectionLayout");
  const messages = useMessages();
  return (
    <ArticleLayout category={t("latent_box_collection")} {...rest}>
      {children}
      <div className="h-12" />

      {/*<Separator />*/}

      <div className="h-3" />

      <div className="flex flex-col items-start lg:flex-row lg:items-center gap-1 not-prose">
        <NextIntlClientProvider messages={pick(messages, ["Feedback"])}>
          <Feedback />
        </NextIntlClientProvider>

        <div className="text-sm flex items-center shrink-0 gap-4 py-1.5 h-8 text-zinc-600 dark:text-zinc-400">
          <Link href="/docs/follow-us">{t("follow_us")}</Link>
          <Separator orientation="vertical" />
          <Link href="/docs/collections">{t("browse_more")}</Link>
        </div>
      </div>

      <div className="h-3" />

      {/*<Separator />*/}
    </ArticleLayout>
  );
}
