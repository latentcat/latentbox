import { default as data } from "../../.all-contributorsrc";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/navigation";

import { default as contributors } from "../../.all-contributorsrc";


export function Contributor(props: ContributorProps) {
  return (
    <Link
      href={props.profile}
      target="_blank"
    >
      <Badge
        variant="secondary"
        className="flex gap-2.5 items-center grow-0 max-w-32 p-1 rounded-full"
      >
        <Image
          width={24}
          height={24}
          src={props.avatar_url}
          alt={props.name}
          className="w-6 h-6 rounded-full block"
        />
        <div className="text-xs font-normal font-mono line-clamp-1 w-full text-center pr-2">
          {props.name}
        </div>
      </Badge>
    </Link>
  )
}


export function ContributorById(props: { id: string }) {

  const author =
    contributors["contributors"].find(
      (c) => c["login"] === props.id,
    ) || {
      login: props.id,
      name: props.id,
      avatar_url: "",
      profile: "",
      contributions: []
    }

  return (
    <Link
      href={author.profile}
      target="_blank"
    >
      <Badge
        variant="secondary"
        className="flex gap-2.5 items-center grow-0 max-w-32 p-1 rounded-full"
      >
        <Image
          width={24}
          height={24}
          src={author.avatar_url}
          alt={author.name}
          className="w-6 h-6 rounded-full block"
        />
        <div className="text-xs font-normal font-mono line-clamp-1 w-full text-center pr-2">
          {author.name}
        </div>
      </Badge>
    </Link>
  )
}

export interface ContributorProps {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
}

export default async function Contributors() {
  const contributors: ContributorProps[] = data["contributors"];

  return (
    <div className="flex flex-wrap gap-6 not-prose">
      {contributors.map((contributor) => (
        <div
          key={contributor.login}
          className="flex flex-col items-center _grow"
        >
          <Link
            href={contributor.profile}
            target="_blank"
            className="flex flex-col items-center grow-0 w-20"
          >
            <Image
              width={80}
              height={80}
              src={contributor.avatar_url}
              alt={contributor.name}
              className="w-20 h-20 rounded-full block"
            />
            <div className="mt-2 text-xs line-clamp-1 w-full text-center">
              <b>{contributor.name}</b>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
