export interface ResourceItem {
  id: string
  name: string
  url: string
  desc?: string,
  iconType?: 'jpg' | 'png' | 'svg' | 'ico'
}

export function isDisabled(item: ResourceItem): boolean {
  return !item.url
}
