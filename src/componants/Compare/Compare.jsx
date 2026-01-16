import { useState, useEffect } from "react";

const Compare = () => {
  const [products, setProducts] = useState([]);
  const [select1, setSelect1] = useState(null);
  const [select2, setSelect2] = useState(null);

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => {
        if (!res.ok) throw new Error("JSON file not found");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSelectFirst = (e) => {
    const selectedId = e.target.value;
    const product = products.find((p) => p.product_id === selectedId);
    setSelect1(product);
  };

  const handleSelectSecond = (e) => {
    const selectedId = e.target.value;
    const product = products.find((p) => p.product_id === selectedId);
    setSelect2(product);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#9538E2] text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Compare Products</h1>
        <p className="max-w-2xl mx-auto px-4 opacity-90">
          Choose two gadgets to see their specs side by side!
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-9">
          {/* First Gadget Column */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
            <label className="label font-bold text-gray-700">
              Select First Gadget:
            </label>
            <select
              className="select select-bordered w-full mb-6 border-purple-200 focus:outline-purple-500"
              onChange={handleSelectFirst}
              defaultValue="default"
            >
              <option value="default" disabled>
                Choose a product
              </option>
              {products.map((p) => (
                <option key={p.product_id} value={p.product_id}>
                  {p.product_title}
                </option>
              ))}
            </select>

            {select1 ? (
              <div className="text-center transition-all">
                <img
                  src={select1.product_image}
                  className="h-48 mx-auto object-contain mb-4 rounded-xl"
                  alt={select1.product_title}
                />
                <h3 className="text-2xl font-bold text-gray-800">
                  {select1.product_title}
                </h3>
                <div className="mt-4 text-left space-y-3 border-t pt-4">
                  <p className="flex justify-between">
                    <span className="font-semibold text-gray-600">Price:</span>
                    <span className="text-purple-600 font-bold">
                      ${select1.price}
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold text-gray-600">
                      Category:
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                      {select1.category}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-gray-600">Rating:</span>
                    <span className="text-yellow-500">⭐ {select1.rating}</span>
                  </p>
                  <div>
                    <span className="font-semibold text-gray-600">
                      Description:
                    </span>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {select1.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 italic">
                Select a gadget to see details
              </div>
            )}
          </div>

          {/* Second Gadget Column */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
            <label className="label font-bold text-gray-700">
              Select Second Gadget:
            </label>
            <select
              className="select select-bordered w-full mb-6 border-purple-200 focus:outline-purple-500"
              onChange={handleSelectSecond}
              defaultValue="default"
            >
              <option value="default" disabled>
                Choose a product
              </option>
              {products.map((p) => (
                <option key={p.product_id} value={p.product_id}>
                  {p.product_title}
                </option>
              ))}
            </select>

            {select2 ? (
              <div className="text-center transition-all">
                <img
                  src={select2.product_image}
                  className="h-48 mx-auto object-contain mb-4 rounded-xl"
                  alt={select2.product_title}
                />
                <h3 className="text-2xl font-bold text-gray-800">
                  {select2.product_title}
                </h3>
                <div className="mt-4 text-left space-y-3 border-t pt-4">
                  <p className="flex justify-between">
                    <span className="font-semibold text-gray-600">Price:</span>
                    <span className="text-purple-600 font-bold">
                      ${select2.price}
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-semibold text-gray-600">
                      Category:
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                      {select2.category}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold text-gray-600">Rating:</span>
                    <span className="text-yellow-500">⭐ {select2.rating}</span>
                  </p>
                  <div>
                    <span className="font-semibold text-gray-600">
                      Description:
                    </span>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {select2.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 italic">
                Select a gadget to see details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
