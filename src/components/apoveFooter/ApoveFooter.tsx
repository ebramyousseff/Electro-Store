import img1 from "../../assets/two-banner-1.a4734893807150517513.webp";
import img2 from "../../assets/two-banner-2.129300487718b6c0a1c6.webp";
import img3 from "../../assets/footer-widget-img-01.6f37f005d1b5c5d14c14.webp";
import axiosInstance from "../../api/axiosInstance";
import { Product } from "../../types";
import { useQuery } from "@tanstack/react-query";
import "./ApoveFooter.css";
import { Link } from "react-router-dom";



const fetchProducts = async () => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};

const ApoveFooter = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

 const mensClothing = data?.filter((product)=>product.category === "men's clothing").slice(0,3)
  const jewelry = data?.filter((product)=>product.category ==="jewelery").slice(0,3)
  const womensclothing = data?.filter((product)=>product.category === "women's clothing").slice(0,3)

  return (
    <section className=" w-full md:px-20 px-8 dark:bg-black text-black dark:text-white">
      <div className="flex flex-col ">
        <div className="flex flex-col w-full justify-center lg:px-10 md:px-10 items-center gap-2 lg:flex-row mb-10">
          <img src={img1} alt="" className=" lg:w-[55%] w-full"/>
          <img src={img2} alt="" className="lg:w-[55%] w-full"/>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 ">
          <div className=" flex flex-col gap-3">
            <div className="apove border-b-[1px]  border-gray-400 mb-2">
              <h1 className="text-2xl font-semibold allpro">Men's Clothing</h1>
            </div>
            
            {mensClothing?.map((product)=>(
              <div className="flex gap-3 items-center" key={product.id}>
              <Link to=""><img src={product.image} alt="" className="w-15 cursor-pointer" /></Link>
              <div className="">
                <Link to=""><h1 className="text-gray-500 font-semibold cursor-pointer">
                  {product.title.split(" ").slice(0,3).join(" ")}
                </h1></Link>
                <p className="line-through text-gray-500 text-sm">${(product.price + 55).toFixed(2)}</p>
                <h3 className="text-[#c16767] text-lg">${product.price}</h3>
              </div>
            </div>
            ))}
          </div>
          <div className=" flex flex-col">
            <div className="apove border-b-[1px]  border-gray-400 mb-2">
              <h1 className="text-2xl font-semibold allpro">Jewelery</h1>
            </div>
            {jewelry?.map((product)=>(
              <div className="flex gap-3 items-center" key={product.id}>
              <img src={product.image} alt="" className="w-15" />
              <div className="">
                <h1 className="text-gray-500 font-semibold ">
                  {product.title.split(" ").slice(0,3).join(" ")}
                </h1>
                <p className="line-through text-gray-500 text-sm">${(product.price + 55).toFixed(2)}</p>
                <h3 className="text-[#c16767] text-lg">${product.price}</h3>
              </div>
            </div>
            ))}


          </div>
          <div className=" flex flex-col">
            <div className="apove border-b-[1px]  border-gray-400 mb-2">
              <h1 className="text-2xl font-semibold allpro">
                Women's Clothing
              </h1>
            </div>
            {womensclothing?.map((product)=>(
              <div className="flex gap-3 items-center" key={product.id}>
              <Link to=""><img src={product.image} alt="" className="w-15 cursor-pointer" /></Link>
              <div className="">
                <Link to=""><h1 className="text-gray-500 font-semibold cursor-pointer">
                  {product.title.split(" ").slice(0,3).join(" ")}
                </h1></Link>
                <p className="line-through text-gray-500 text-sm">${(product.price + 55).toFixed(2)}</p>
                <h3 className="text-[#c16767] text-lg">${product.price}</h3>
              </div>
            </div>
            ))}


          </div>
          <img src={img3} alt="" className="w-full px-10 md:px-0 xl:px-0 max-w-[40rem]"/>
        </div>
      </div>
    </section>
  );
};

export default ApoveFooter;
