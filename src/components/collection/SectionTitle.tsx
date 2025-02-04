import { br } from "@upstash/redis/zmscore-b6b93f14";


interface SectionTitleProps {
  title: string
  className?: string
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className={props.className}>
      {props.title}
    </h2>
  )
}

export function SecondarySectionTitle(props: SectionTitleProps) {
  return (
    <h3 className={props.className}>
      {props.title}
    </h3>
  )
}