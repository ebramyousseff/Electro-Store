import { FaCartShopping, FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartProduct, Product } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartSlice";
import Swal from "sweetalert2";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/wishListSlice";
import {
  addToCompare,
  removeFromCompare,
} from "../../redux/slices/compareSlice";
import Cookies from "js-cookie";

type props = {
  product: Product;
};

const SingleItem = ({ product }: props) => {
  const dispatch = useAppDispatch();
  const wishList = useAppSelector((state) => state.wishlist);
  const compareList = useAppSelector((state) => state.compare.products);
  const isLoggedIn = !!Cookies.get("user");

  const isInCompare = compareList.some((item) => item.id === product.id);
  return (
    <div>
      <div
        key={product.id}
        className="group min-w-[180px] flex flex-col justify-center items-center py-5 hover:shadow-zinc-500 hover:shadow-2xl transition-shadow duration-300 shadow-transparent"
      >
        <div className="w-[80%]">
          <h3 className="text-gray-500 capitalize">{product.category}</h3>
          <h1 className="mb-2">
            {product.title.split(" ").slice(0, 3).join(" ")}
          </h1>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-42 h-44 flex m-auto rounded-md"
            />
          </Link>
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="line-through text-gray-500 text-sm">
                ${(product.price + 55).toFixed(2)}
              </p>
              <h1 className="text-[#c16767] text-2xl">${product.price}</h1>
            </div>
            <FaCartShopping
              onClick={() => {
                dispatch(addToCart(product as CartProduct));
                Swal.fire({
                  title: "Added to Cart!",
                  text: `${product.title
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")} was added successfully.`,
                  icon: "success",
                  confirmButtonText: "OK",
                  timer: 2000,
                  showConfirmButton: false,
                });
              }}
              className="group-hover:bg-main group-hover:text-black text-white bg-gray-500 rounded-full text-4xl p-2 cursor-pointer"
            />{" "}
          </div>
          <div className="bottom-cart opacity-0 group-hover:opacity-100 transition-opacity duration-300 my-2">
            <div className="flex justify-between pt-4">
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  if (!isLoggedIn) {
                    Swal.fire({
                      icon: "warning",
                      title: "Please login first",
                      text: "You need to be logged in to use the Wishlist.",
                      confirmButtonColor: "#3085d6",
                    });
                    return;
                  }

                  const isInWishlist = wishList.products.some(
                    (item) => item.id === product.id
                  );
                  if (isInWishlist) {
                    dispatch(removeFromWishlist(product.id));
                  } else {
                    dispatch(addToWishlist(product));
                  }
                }}
              >
                <FaHeart
                  className={`cursor-pointer text-2xl transition-colors duration-200 ${
                    wishList.products.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
                <h2
                  className={`cursor-pointer transition-colors duration-200 ${
                    wishList.products.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {wishList.products.some((item) => item.id === product.id)
                    ? "Remove"
                    : "Wishlist"}
                </h2>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  if (!isLoggedIn) {
                    Swal.fire({
                      icon: "warning",
                      title: "Please login first",
                      text: "You need to be logged in to use the Compare feature.",
                      confirmButtonColor: "#3085d6",
                    });
                    return;
                  }

                  if (isInCompare) {
                    dispatch(removeFromCompare(product.id));
                  } else {
                    dispatch(addToCompare(product));
                  }
                }}
              >
                <FaArrowRightArrowLeft
                  className={`text-2xl transition-colors duration-200 ${
                    isInCompare ? "text-gray-500" : "text-gray-500"
                  }`}
                />
                <h2
                  className={`transition-colors duration-200 ${
                    isInCompare ? "text-gray-600" : "text-gray-500"
                  }`}
                >
                  {isInCompare ? "Remove" : "Compare"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
