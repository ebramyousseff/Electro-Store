import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { Product } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { FaHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";
import RatingStars from "../rating/RatingٍStars";


const fetchSingleProduct = async (id: string | undefined) => {
  const response = await axiosInstance.get<Product>(`/products/${id}`);
  return response.data;
};

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
  // const cart = useAppSelector((state) => state.cart);
  // const wishList = useAppSelector((state)=>state.wishlist.products)
  
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
    enabled: !!id,
    
  });
  console.log('data', data)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="w-full dark:bg-black text-black dark:text-white">
      <div className="flex flex-col md:flex-row px-8 md:px-30 py-20 gap-5 md:gap-10">
        <div className="w-full md:w-1/2 ">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-[26rem] h-auto"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="border-gray-500 border-b-[1px] w-full">
            <div>{data?.category}</div>
            <h1 className="text-4xl font-bold mb-2">{data?.title}</h1>
            <div>
              {data?.rating?.rate && <RatingStars rating={data.rating.rate} />}
            </div>
            <p className="">Availability: 24 in stock</p>
          </div>
          <div className="border-gray-500 border-b-[1px] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                >
                <FaHeart className="text-gray-400 hover:text-red-500 transition-colors duration-300" />
                Wishlist
              </div>
              <div className="flex items-center  gap-2">
                <FaArrowRightArrowLeft className="text-gray-400" /> Compare
              </div>
            </div>
            <p className="text-gray-600 mb-4">{data?.description}</p>
            <p className="text-xl font-semibold text-blue-500">
              ${data?.price}
            </p>
          </div>
          <div className="flex gap-4 border-gray-500 border-b-[1px] py-5">
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="rounded-2xl border border-blue-400 bg-blue-200 outline-none px-4 w-20 text-black"
            />
            <button
              onClick={() => {
                if (data && quantity > 0) {
                  dispatch(
                    addToCart({
                      ...data,
                      quantity,
                      totalPrice: data.price * quantity,
                    })
                  );
                }
              }}
              className="bg-black text-main px-4 py-2 rounded-full mt-2 cursor-pointer font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
