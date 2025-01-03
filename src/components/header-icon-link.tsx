export interface Props {
  href: string
  iconClass: string
  description: string
}

export default function HeaderIconLink({
  href,
  iconClass,
  description,
}: Props) {
  return (
    <a href={href} className="text-xl">
      <i className={iconClass} />
      <span className="sr-only">{description}</span>
    </a>
  )
}
