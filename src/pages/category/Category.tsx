import { useParams } from "react-router-dom"
import ProductList from "../../components/productList/ProductList"
import AllProducts from "../../components/allProducts/AllProducts"
import axiosInstance from "../../api/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import { Product } from "../../types"

const fetchCategory = async(title:string)=>{
  const response = await axiosInstance.get(`/products/category/${title}`)
  return response.data
}

const Category = () => {
const {id} = useParams()

const {data=[]} = useQuery<Product[]>({
  queryKey:['category', id],
  queryFn:()=>fetchCategory(id as string)

})
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 px-7 py-8">
        <ProductList />
        <AllProducts data={data} title={id || "Category"}/>
      </div>

    </div>
  )
}

export default Category