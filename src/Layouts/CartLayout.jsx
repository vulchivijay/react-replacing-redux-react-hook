import Header from "../components/Header";
import Cart from "../pages/Cart";

export default function LoginLayout() {
  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto">
        <Cart />
      </div>
    </>
  )
}