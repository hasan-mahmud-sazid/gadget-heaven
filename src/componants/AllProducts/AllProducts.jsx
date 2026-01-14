import { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {
  const categories = [
    "All Product",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "iPhone",
  ];

  const [gadgets, setGadgets] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All Product");

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filteredGadgets =
    selectedCategory === "All Product"
      ? gadgets
      : gadgets.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto mt-96">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-60 bg-white p-6 rounded-2xl shadow-sm h-fit flex flex-col gap-3 border border-gray-100">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`btn rounded-full mb-2 text-lg transition-all ${
                selectedCategory === cat
                  ? "bg-[#9538E2] text-white hover:bg-[#822ec7]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((product) => (
              <Product key={product.product_id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-bold text-[#9538E2]">
                No Products Found in this Category!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
