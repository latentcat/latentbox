import { Prose } from "@/components/Prose";
import { Container, ContainerFull } from "@/components/Containers";
import { HeaderPadding } from "@/components/Header";

interface SimpleLayoutProps {
  title: string;
  intro: string;
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
  return (
    <Container className="">
      <HeaderPadding />
      <header className="max-w-2xl mt-16 sm:mt-24">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}

export function SimpleLayoutProj(props: SimpleLayoutProps) {
  const { children, ...rest } = props;
  return (
    <SimpleLayout {...rest}>
      <Prose className="mt-8 mb-16 break-words" data-mdx-content>
        {children}
      </Prose>
    </SimpleLayout>
  );
}


interface ArticleLayoutProps {
  title: string;
  intro: string;
  children?: React.ReactNode;
  hideGiscus?: boolean;
}

export function ArticleLayoutWithoutProse({ title, intro, children }: ArticleLayoutProps) {
  return (
    <div className="">
      <header className="mt-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 _sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children}
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
