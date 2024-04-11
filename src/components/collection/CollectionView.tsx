import { CollectionGroupProps, CollectionItemProps } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

function CollectionLink(props: CollectionItemProps) {
  return (
    <Link
      href={`/${props.id}`}
      className="flex flex-col gap-2 items-center"
    >
      <AspectRatio
        ratio={21/9}
        style={{ background: props.background }}
        className="relative flex flex-col items-center justify-center rounded-xl _border"
      >
        {props.icon && (
          <props.icon className="w-14 h-14 text-white" />
        )}

        {props.tag && (
          <Badge className="absolute top-3 right-3 px-1.5 py-0 text-white rounded-md font-mono font-normal leading-5 border-white/20" variant="outline">
            {props.tag}
          </Badge>
        )}
      </AspectRatio>
      <div className="line-clamp-1">
        {props.name}
      </div>
    </Link>
  )
}


export function CollectionGroup(props: CollectionGroupProps) {
  return (
    <div className="w-full flex flex-col @container">
      <h3 className="text-xl font-bold mb-6">
        {props.title}
      </h3>
      <div className="w-full grid @lg:grid-cols-2 @3xl:grid-cols-3 gap-6">
        {props.links.map((item, index) => (
          <CollectionLink
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}