import Advertisment from "../../components/advertisement/Advertisment";
import AllProducts from "../../components/allProducts/AllProducts";
import ProductList from "../../components/productList/ProductList";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query"
import { Product } from "../../types";


const fetchProducts = async () => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};


const Home = () => {
  const { data} = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });


  

  return (
    <div className="">
      <Advertisment />
      <div className="flex flex-col md:flex-row">
        <ProductList />
        <AllProducts data={data} title={"All Products"}/>
      </div>
      
    </div>
  );
};

export default Home;
