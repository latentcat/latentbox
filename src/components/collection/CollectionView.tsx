import { CollectionGroupProps, CollectionItemProps } from "@/lib/docs_navigation";
import { Link } from "@/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { CollectionLink } from "@/components/collection/CollectionLink";



export function CollectionGroup(props: CollectionGroupProps) {
  return (
    <div className="w-full flex flex-col @container">
      <h3 className="text-xl font-bold mb-6">
        {props.title}
      </h3>
      <div className="w-full grid @lg:grid-cols-2 @3xl:grid-cols-3 gap-6">
        {props.links.map((item, index) => {
          const { icon: Icon, ...rest } = item
          return (
            <CollectionLink
              key={index}
              icon={Icon ? <Icon className="w-14 h-14 text-white" /> : <></>}
              {...rest}
            />
          )
        })}
      </div>
    </div>
  )
}