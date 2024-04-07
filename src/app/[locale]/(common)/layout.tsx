import { Footer } from "@/components/Footer";
import React from "react";
import { ContainerFull } from "@/components/Containers";


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <>
      <div className="min-h-screen">
        {children}
      </div>
      <ContainerFull>
        <Footer />
      </ContainerFull>
    </>
  );
}
