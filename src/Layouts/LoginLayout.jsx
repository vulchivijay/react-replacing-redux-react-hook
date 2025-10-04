import { Link, Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <>
      <Link to="/">Back to Home</Link>
      <Outlet />
    </>
  )
}