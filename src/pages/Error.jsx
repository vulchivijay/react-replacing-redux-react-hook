export default function Error({ error }) {
  return (
    <>
      {error.status} {error.message}
    </>
  )
}