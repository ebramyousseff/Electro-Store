import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartSlice";
import { removeFromWishlist } from "../../redux/slices/wishListSlice";
import { IoMdClose } from "react-icons/io";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistProducts = useAppSelector((state) => state.wishlist.products);

  return (
    <section className="w-full px-4 md:px-60 py-8 dark:bg-black text-black dark:text-white">
      <div className="border-b-[3px] border-t-[1px] border-gray-300 md:flex justify-between hidden py-2">
        <div className="text-gray-500 text-xl font-semibold px-5">Product</div>
        <div className="text-gray-500 text-xl font-semibold px-5">Price</div>
      </div>
      <div className="">
      {wishlistProducts.map((product) => (
  <div key={product.id} className="py-5 border-b border-gray-300">
    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center">
      {/* Remove Button */}
      <div className="md:col-span-1 flex justify-end md:justify-center" onClick={() => dispatch(removeFromWishlist(product.id))}>
        <IoMdClose className="text-xl cursor-pointer" />
      </div>

      {/* Product Image */}
      <div className="md:col-span-2 flex justify-center">
        <img src={product.image} alt={product.title} className="w-28 h-28 object-contain" />
      </div>

      {/* Product Title */}
      <div className="md:col-span-3 text-center md:text-left px-2">
        {product.title.split(" ").slice(0, 3).join(" ")}
      </div>

      {/* Add To Cart & Price */}
      <div className="md:col-span-3 flex flex-col items-center gap-2">
        <button
          className="text-black bg-main px-4 py-1 rounded-2xl font-semibold cursor-pointer"
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(removeFromWishlist(product.id));
          }}
        >
          Add To Cart
        </button>
        
      </div>
      <p className="text-xl text-gray-black">${product.price}</p>
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default Wishlist;
