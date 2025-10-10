import { Link } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export default function Header() {
  const { quantity } = useStore(true)[2];
  console.log('quantity : ', useStore(true));
  return (
    <header className="sticky top-0 left-0 z-50 bg-white py-2 sm:px-4 shadow-md">
      <div className="max-w-6xl m-auto flex items-center justify-between ">
        <div className="flex flex-2 items-center justify-start">
          <Link to="/" className="text-2xl font-semibold">Vulchi</Link>
          <div className="w-full mx-4">
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-200 text-md rounded-md border-1 border-white"
              placeholder="Searching Products, Brands, and more" />
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-end">
          <Link to="/login" className="text-xl px-4">Login</Link>
          <Link to="/cart" className="text-xl px-4">Cart {quantity}</Link>
        </nav>
      </div>
    </header>
  )
}