import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="max-w-6xl m-auto flex items-center justify-between ">
        <Link to="/" className="text-2xl">Vulchi</Link>
        <nav>
          <Link to="/products" className="pr-4">Products</Link>
          <Link to="/cart" className="pr-4">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}