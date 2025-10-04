import Header from "../components/Header";
import Home from "../pages/Home";

export default function RootLayout() {
  return (
    <>
      <Header />
      <div className="max-w-6xl m-auto">
        <Home />
      </div>
    </>
  )
}