export default function Error({ error }) {
  return (
    <div className="sm:px-4">
      {error.status} {error.message}
    </div>
  )
}