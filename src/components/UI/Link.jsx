export default function Link({ className, href, target, children }) {
  return (
    <a href={href} className={className} target={target}>{children}</a>
  )
}