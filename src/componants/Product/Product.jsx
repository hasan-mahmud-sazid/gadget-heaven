import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    // category,
    price,
    // description,
    // specification,
    // availability,
    // rating,
  } = product;

  return (
    <div className="card bg-white w-full max-w-87.5 shadow-md hover:shadow-xl transition-shadow duration-300 p-5 rounded-3xl border border-gray-100">
      <figure className="w-full h-48 overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-full object-contain p-2"
        />
      </figure>

      <div className="mt-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
          {product_title}
        </h2>
        <p className="text-gray-500 font-medium">Price: {price}k</p>
        <Link to={`/product/${product_id}`}>
          <div className="mt-2">
            <button className="btn btn-outline rounded-full text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-[#9538E2] font-bold px-6">
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
