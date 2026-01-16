import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStoredCartList } from "../../utility/addtoCart";
import { getWishList } from "../../utility/addtoWishList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [sortBy, setSortBy] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(0);

  // কার্ট ডাটা ট্র্যাক করার জন্য লোকাল স্টেট
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);

        // শুরুতে ডাটা লোড করার সময় কার্ট আইটেম সেট করা
        const storedCartIds = getStoredCartList();
        const initialCart = data.filter((p) =>
          storedCartIds.includes(p.product_id)
        );
        setCartItems(initialCart);
      });
  }, []);

  // clearCart ফাংশন: এটি সবকিছু রিসেট করবে
  const clearCart = () => {
    localStorage.removeItem("cart-list"); // লোকাল স্টোরেজ মুছবে
    setCartItems([]); // কার্ট স্টেট খালি করবে
    setPurchasePrice(0); // প্রাইস রিসেট করবে
  };

  const storedWishlistIds = getWishList();

  let displayList = [];
  if (activeTab === "cart") {
    displayList = cartItems; // স্টেট থেকে ডাটা নিচ্ছে
  } else {
    displayList = allProducts.filter((p) =>
      storedWishlistIds.includes(p.product_id)
    );
  }

  if (sortBy === "price") {
    displayList = [...displayList].sort((a, b) => b.price - a.price);
  }

  const totalPrice = displayList.reduce(
    (sum, item) => sum + (item.price || 0),
    0
  );

  const handleSort = () => setSortBy("price");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSortBy(null);
  };

  const handlePurchase = () => {
    setPurchasePrice(totalPrice);
    setShowModal(true);

    localStorage.removeItem("cart-list");
    setCartItems([]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* Header Section */}
      <div className="bg-purple-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="max-w-2xl mx-auto mb-8 px-4 opacity-90">
          Explore the latest gadgets that will take your experience to the next
          level.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleTabChange("cart")}
            className={`px-14 py-3 rounded-full font-bold transition-all ${
              activeTab === "cart"
                ? "bg-white text-purple-600 shadow-md"
                : "border border-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleTabChange("wishlist")}
            className={`px-14 py-3 rounded-full font-bold transition-all ${
              activeTab === "wishlist"
                ? "bg-white text-purple-600 shadow-md"
                : "border border-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Control Section */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl font-bold">
            {activeTab === "cart" ? "Cart" : "Wishlist"}
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-xl font-bold">
              Total cost: ${totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={handleSort}
              className="btn border-purple-600 text-purple-600 rounded-full px-6 hover:bg-purple-50"
            >
              Sort by Price
            </button>
            <button
              onClick={handlePurchase}
              disabled={displayList.length === 0 || activeTab === "wishlist"}
              className="btn bg-purple-600 text-white rounded-full px-8 border-none"
            >
              Purchase
            </button>
          </div>
        </div>

        {/* Product List Area */}
        <div className="space-y-6">
          {displayList.length > 0 ? (
            displayList.map((item, index) => (
              <div
                key={`${item.product_id}-${index}`}
                className="bg-white p-6 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8 border relative"
              >
                <div className="w-full md:w-52 h-40 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">
                    {item.product_title}
                  </h3>
                  <p className="text-gray-500 mb-3">{item.description}</p>
                  <p className="font-bold text-xl text-gray-700">
                    Price: ${item.price}
                  </p>
                </div>
                <button className="absolute top-4 right-4 text-red-500 border border-red-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-50">
                  ✕
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <h2 className="text-3xl font-bold text-gray-300">
                No Items in {activeTab}
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* --- Success Modal --- */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full animate-fadeIn">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <img
                  src="https://img.icons8.com/color/96/checked--v1.png"
                  alt="success"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Payment Successfully
            </h2>
            <div className="border-t border-gray-100 my-4"></div>
            <p className="text-gray-500 font-medium">Thanks for purchasing.</p>
            <p className="text-gray-700 font-bold mt-2 text-lg">
              Total: ${purchasePrice.toFixed(2)}
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full py-3 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300 transition-all shadow-md active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
