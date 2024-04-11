"use client";

import { NavGroup } from "@/lib/docs_navigation";
import { cn } from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import { Link, usePathname } from "@/navigation";

export interface DocsSidebarNavProps {
  items: NavGroup[]
  onClick?: () => void
}

export function DocsSidebarNav({ items, onClick }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="pb-4">
          <h4 className="mb-1 rounded-md _px-2 py-1 text-sm font-semibold">
            {item.title}
          </h4>
          {item.links.length && (
            <DocsSidebarNavItems items={item.links} pathname={pathname} onClick={onClick}/>
          )}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: NavGroup["links"]
  pathname: string | null
  onClick?: () => void
}

export function DocsSidebarNavItems({
  items,
  pathname,
  onClick,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm space-y-[2px]">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={onClick}
          className={cn(
            "group flex justify-between w-full items-center rounded-md border border-transparent px-3 py-0.5 hover:bg-accent",
            "leading-6",
            pathname === item.href
              ? "font-medium text-foreground bg-accent"
              : "text-muted-foreground"
          )}
        >
          <div className="line-clamp-1">
            {item.title}
          </div>
          {item.tag && (
            <Badge className="px-1.5 py-0 rounded-md font-mono bg-background font-normal leading-5 ml-2 border-foreground/20" variant="outline">
              {item.tag}
            </Badge>
          )}
        </Link>
      ))}
    </div>
  ) : null;
}
