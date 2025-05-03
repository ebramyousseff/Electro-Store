import "./AllProducts.css";
import { Product } from "../../types";
import SingleItem from "../singleItem/SingleItem";

type AllProductsProps = {
  data?: Product[];
  title: string;
};

const AllProducts = ({ data, title }: AllProductsProps) => {
  return (
    <section className="px-4 w-full py-20 dark:bg-black text-black dark:text-white">
      <div className="border-b-[1px] w-[97%] border-gray-400">
        <h1 className="text-2xl font-semibold allpro">{title}</h1>
      </div>

      <div className="grid grid-cols-1 xl:w-[97%] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data?.map((product) => (
          <div key={product.id}>
            <SingleItem
             product={product}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
