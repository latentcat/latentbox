import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full flex flex-col items-center px-6 lg:px-12">
      <div className="w-full max-w-5xl">{props.children}</div>
    </div>
  );
}

export function ContainerFull(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full flex flex-col items-center px-6">
      <div className="w-full">{props.children}</div>
    </div>
  );
}

