import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "@/app/providers";
import { Footer } from "@/components/Footer";
import { generateMetadata, LayoutHead } from "@/lib/layout_data";

const inter = Inter({ subsets: ["latin"] });

import { layoutViewport } from "@/lib/layout_data";
import { Header } from "@/components/Header";
import { getServerSession } from "next-auth/next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import React from "react";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import { useNavData } from "@/lib/docs_navigation";

// export const metadata: Metadata = layoutMetadata;

export { generateMetadata } from "@/lib/layout_data";

export const viewport: Viewport = layoutViewport;

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  const { navigation } = useNavData()

  return (
    <html lang={locale} className="antialiased" suppressHydrationWarning>
      <LayoutHead />
      <body className={cn(inter.className, "")}>
      <Providers>
        <NextIntlClientProvider
          messages={pick(messages, ["header", "user_button"])}
        >
          <Header navigation={navigation}/>
        </NextIntlClientProvider>
        <div className="flex flex-col">{children}</div>
      </Providers>
      </body>
    </html>
  );
}
