import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { addtoCartList } from "../../utility/addtoCart";
import { toast } from "react-toastify";
import { addtoWishList } from "../../utility/addtoWishList";

const ProductDetails = () => {
  const { productId } = useParams();
  const allData = useLoaderData();

  const product = allData.find((p) => p.product_id === productId) || {};

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
    availability,
  } = product;

  const handelCartList = (id) => {
    addtoCartList(id);
    window.dispatchEvent(new Event("storage"));
    toast.success("Successfully added to cart!", {
      icon: <AiOutlineShoppingCart className="text-purple-600" />,
    });
  };

  const handelwishList = (id) => {
    addtoWishList(id);
    window.dispatchEvent(new Event("wish-storage"));
    toast.success("Successfully added to cart!", {
      icon: <AiOutlineShoppingCart className="text-purple-600" />,
    });
  };
  return (
    <div className="relative mb-96">
      <div className="bg-[#9538E2] pt-5 pb-44 text-center text-white ">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className="opacity-80 mt-2 max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-35 w-[90%] lg:w-250 bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 shadow-xl">
        <div className="md:w-1/2 bg-gray-100 rounded-2xl flex justify-center items-center">
          <img
            src={product_image}
            alt={product_title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <p className="text-xl font-semibold text-gray-600">
            Price: $ {price}
          </p>

          {availability && (
            <span className="badge badge-success bg-green-100 text-green-600 border-green-500 py-3 px-4">
              In Stock
            </span>
          )}

          <p className="text-gray-500">{description}</p>

          <div className="space-y-2">
            <h3 className="font-bold">Specification:</h3>
            <ol className="list-decimal list-inside text-gray-500 ml-2">
              {specification?.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ol>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <p className="font-bold">Rating ⭐</p>
            <div className="flex gap-1 text-yellow-400">⭐⭐⭐⭐</div>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {rating}
            </span>
          </div>

          <div className="flex gap-4 pt-4 text-2xl">
            <button
              onClick={() => handelCartList(product_id)}
              className="btn bg-[#9538E2] text-white rounded-full flex items-center gap-2 hover:bg-[#822ec7]"
            >
              Add To Cart <AiOutlineShoppingCart className=" text-2xl" />
            </button>
            <button
              onClick={() => handelwishList(product_id)}
              className="btn btn-outline rounded-full border-gray-300 text-xl"
            >
              <GiSelfLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
