"use client"

import { CollectionItemProps } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { useHover } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { transitionDampingMd } from "@/lib/animations";



export interface CollectionLinkProps {
  id: string;
  name: string;
  desc: string;
  tag?: string;
  background?: string;
  icon?: ReactNode
}

export function CollectionLink(props: CollectionLinkProps) {
  const [ref, hovering] = useHover();

  return (
    <Link
      href={`/${props.id}`}
      className="flex flex-col gap-2 items-center"
      ref={ref}
    >
      <motion.div
        whileTap={{
          scale: 0.95,
        }}
        transition={transitionDampingMd}
        className="w-full"
      >
        <AspectRatio
          ratio={21/9}
          style={{ background: props.background }}
          className="relative flex flex-col items-center justify-center rounded-xl _border"
        >
          {props.icon && (
            <>
              <motion.div
                animate={{
                  scale: hovering ? 1.1 : 1,
                }}
                transition={transitionDampingMd}
              >
                {props.icon}
              </motion.div>
            </>
          )}

          {props.tag && (
            <Badge className="absolute top-3 right-3 px-1.5 py-0 text-white rounded-md font-mono font-normal leading-5 border-white/20" variant="outline">
              {props.tag}
            </Badge>
          )}
        </AspectRatio>
      </motion.div>
      <div className="line-clamp-1">
        {props.name}
      </div>
    </Link>
  )
}
