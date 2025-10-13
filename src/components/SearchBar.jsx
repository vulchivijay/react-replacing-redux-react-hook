import { useStore } from "../Hooks/useStore";

export default function SearchBar() {
  const sdispatch = useStore(true)[3];

  const handleSearch = (keyword) => {
    sdispatch("SearchQuery", keyword);
    // fetch('https://dummyjson.com/products/search?q=phone')
    // .then(res => res.json())
    // .then(console.log);
  }

  return (
    <div className="w-full mx-4">
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-200 text-md rounded-2xl border-1 border-gray-200"
        placeholder="Searching Products, Brands, and more"
        onChange={(event) => handleSearch(event.target.value) }/>
    </div>
  )
}