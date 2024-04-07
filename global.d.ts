// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.json");
declare interface IntlMessages extends Messages {}

declare module "*.all-contributorsrc" {
  const value: any;
  export default value;
}
