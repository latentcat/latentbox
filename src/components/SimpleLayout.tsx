import { Prose } from "@/components/Prose";
import { Container, ContainerFull } from "@/components/Containers";
import { HeaderPadding } from "@/components/Header";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import { Feedback } from "@/components/Feedback";
import pick from "lodash/pick";



interface ArticleLayoutProps {
  category?: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function ArticleLayoutWithoutProse(props: ArticleLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <header className="mt-12">
          {props.category && (
            <p className="_font-bold text-lg text-foreground/70 mb-4">
              {props.category}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 _sm:text-5xl">
            {props.title}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {props.intro}
          </p>
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
    </ArticleLayoutWithoutProse>
  );
}

interface CollectionLayoutProps {
  title: string;
  intro: string;
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function CollectionLayout({ children, ...rest }: CollectionLayoutProps) {
  const t = useTranslations("CollectionLayout")
  const messages = useMessages();
  return (
    <ArticleLayout
      category={t("latent_box_collection")}
      {...rest}
    >
      { children }
      <div className="h-12" />

      <NextIntlClientProvider
        messages={pick(messages, ["Feedback"])}
      >
        <Feedback />
      </NextIntlClientProvider>
    </ArticleLayout>
  )
}
