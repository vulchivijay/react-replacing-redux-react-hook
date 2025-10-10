import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function LoginLayout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Outlet />
    </div>
  )
}