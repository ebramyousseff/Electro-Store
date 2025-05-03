import { useAppDispatch, useAppSelector } from "../../redux/store";
import { IoMdClose } from "react-icons/io";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const { totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full px-4 md:px-40 py-12 font-semibold  dark:bg-black text-black dark:text-white">
  <div className="w-full">
    <h1 className="text-3xl text-center pb-8">Cart</h1>
  </div>

  <div>
    {cartProducts?.length === 0 ? (
      <h1 className="text-3xl text-center py-10">Your Cart is Empty</h1>
    ) : (
      <>
        {/* Header Row */}
        <div className="hidden md:grid md:grid-cols-8 gap-4 border-t-[1px] border-b-[2px] border-gray-300 py-4">
          <div className="col-span-1 text-gray-500 font-bold text-center">Remove</div>
          <div className="col-span-3 text-gray-500 font-bold">Product</div>
          <div className="col-span-1 text-gray-500 font-bold text-center">Price</div>
          <div className="col-span-2 text-gray-500 font-bold text-center">Quantity</div>
          <div className="col-span-1 text-gray-500 font-bold text-center">Subtotal</div>
        </div>

        {/* Product Rows */}
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="grid md:grid-cols-8 items-center gap-4 border-b-[1px] border-gray-300 py-4 w-full"
          >
            {/* Remove Button */}
            <div className="col-span-1 flex justify-start md:justify-center ">
              <IoMdClose
                className=" text-xl cursor-pointer"
                onClick={() => dispatch(removeItem(product.id))}
              />
            </div>

            {/* Product Info */}
            <div className="col-span-3 flex items-center gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-contain"
              />
              <h1 className="text-sm">{product.title.split(" ").slice(0, 3).join(" ")}</h1>
            </div>

            {/* Price */}
            
            <div className="col-span-1 text-center">${product.price.toFixed(2)}</div>

            {/* Quantity */}
            <div className="col-span-2 flex items-center justify-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(product.id))}
                className="px-2 border  border-gray-400 hover:bg-gray-100"
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(product.id))}
                className="px-2 border border-gray-400 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="col-span-1 text-center">
              ${product.totalPrice.toFixed(2)}
            </div>
          </div>
        ))}
      </>
    )}
  </div>
</div>
  );
};

export default Cart;
