

import { promises as fs } from 'fs';

interface Contributor {
  login: string
  name: string
  avatar_url: string
  profile: string
  contributions: string[]
}

export default async function Contributors() {
  const file = await fs.readFile(process.cwd() + '/.all-contributorsrc', 'utf8');
  const data = JSON.parse(file);
  const contributors: Contributor[] = data["contributors"]

  return (
    <div className="flex flex-wrap gap-6 not-prose">
      {contributors.map((contributor) => (
        <div key={contributor.login} className="flex flex-col items-center _grow">
          <a href={contributor.profile} className="flex flex-col items-center grow-0 w-20">
            <img
              src={contributor.avatar_url}
              alt={contributor.name}
              className="w-20 h-20 rounded-full block"
            />
            <div className="mt-2 text-xs line-clamp-1 w-full text-center">
              <b>{contributor.name}</b>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}