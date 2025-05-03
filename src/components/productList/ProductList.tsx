import adver from "../../assets/ad-banner-sidebar.548c340d79526173b74d.webp";

import "./ProductList.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
  const response = await axiosInstance.get("products/categories");
  console.log(response);
  return response.data;
};



const ProductList = () => {
  const { data, isLoading, error } = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  if (isLoading) return <p>Loading.....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="md:pl-24 py-10 px-10 sm:px-28 md:px-6  dark:bg-black text-black dark:text-white">
      <div className="">
        <div className="flex flex-col justify-center gap-2 w-full">
          <h1 className="text-2xl font-semibold assort border-b-[1px] border-gray-500 pb-2">
            Assortment
          </h1>
          {data?.map((category , index) => (
            <div key={index}>
              <Link to={`/products/categories/${category}`}>
                <div className="text-lg border-b-[1px] border-gray-500 pb-2 ">
                  {category}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <img src={adver} alt="" className="w-full " />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
