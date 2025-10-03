import { Link } from "react-router-dom";
import PrimaryMenuBar from "./PrimaryMenuBar";

export default function Header() {
  return (
    <>
      <header className="bg-blue-700 flex items-center justify-between px-4 py-2 shadow-md">
        <Link to="/" className="text-2xl text-white">Logo</Link>
        <menu className="text-sm">
          <PrimaryMenuBar />
        </menu>
      </header>
    </>
  )
}