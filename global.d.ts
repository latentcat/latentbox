// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.json");
declare interface IntlMessages extends Messages {}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.all-contributorsrc" {
  const value: {
    projectName: string;
    projectOwner: string;
    repoType: string;
    repoHost: string;
    files: string[];
    contributors: {
      login: string;
      name: string;
      avatar_url: string;
      profile: string;
      contributions: string[];
    }[];
    commitType: string;
    commitConvention: string;
    contributorsPerLine: number;
  };
  export default value;
}
