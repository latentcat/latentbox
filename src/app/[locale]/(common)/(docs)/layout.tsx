import { HeaderPadding } from "@/components/Header";
import { DocsSidebarNav } from "@/components/DocsSideNav";
import { useNavData } from "@/lib/docs-navigation";


export default function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { navigation } = useNavData()
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full">
        <HeaderPadding />
        <div className="flex flex-col">
          <div className="fixed top-0 hidden md:flex flex-col h-full w-72">
            <HeaderPadding />
            <div className="w-full h-0 grow overflow-y-auto p-6">
              <DocsSidebarNav items={navigation} />
            </div>
          </div>
          <div className="md:pl-72 xl:pr-72 grow">
            <div className="px-6 lg:px-12">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
