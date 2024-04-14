


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