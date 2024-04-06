


interface SectionTitleProps {
  title: string
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <h2 className="_mt-9 _mb-3">
      {props.title}
    </h2>
  )
}