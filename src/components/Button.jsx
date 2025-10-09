export default function Button({ btnType, bgColor, txtColor, borRadius, shadow, outline, onClick, children }) {
  const type = btnType ? btnType : "button";
  let classNames = "px-4 py-2 cursor-pointer ";
  classNames += bgColor ? bgColor + " " : '';
  classNames += txtColor ? txtColor + " " : '';
  classNames += borRadius ? borRadius + " " : '';
  classNames += shadow ? shadow + " " : '';
  classNames += outline ? outline + " " : '';

  return <button
    type={type}
    className={classNames}
    onClick={onClick}>
    {children}
  </button>
}