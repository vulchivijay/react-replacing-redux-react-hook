import { Link } from "react-router-dom";

const Links = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Login",
    href: "/login",
  }
];

export default function PrimaryMenuBar() {
  return (
    <>
      {
        Links.map((anchor, index) => (
          <Link to={anchor.href} key={index} className="text-white px-2">{anchor.name}</Link>
        ))
      }
    </>
  )
}