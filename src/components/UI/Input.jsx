export default function Input({ label, props }) {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input props />
    </>
  )
}