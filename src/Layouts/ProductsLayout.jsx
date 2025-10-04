import Header from "../components/Header";
import Products from "../pages/Products";

export default function ProductsLayout() {
  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto">
        <Products />
      </div>
    </>
  )
}