export default function Button({ btnType, bgColor, txtColor, borRadius, shadow, outline, children }) {
  const type = btnType ? btnType : "button";
  let classNames = "px-4 py-2 cursor-pointer";
  classNames += " " + bgColor +
    " " + txtColor +
    " " + borRadius +
    " " + shadow +
    " " + outline;

  return <button
    type={type}
    className={classNames}>
    {children}
  </button>
}