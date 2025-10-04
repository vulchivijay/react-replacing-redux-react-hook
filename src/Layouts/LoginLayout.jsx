import { Link } from "react-router-dom";
import Login from "../pages/Login";

export default function LoginLayout() {
  return (
    <>
      <Link to="/">Back to Home</Link>
      <div className="max-w-5xl m-auto">
        <Login />
      </div>
    </>
  )
}