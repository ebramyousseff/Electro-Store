import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Registration from "./pages/register/Registration";
import NotFound from "./pages/notFound/NotFound";
import AllProducts from "./components/allProducts/AllProducts";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Category from "./pages/category/Category";
import ProductList from "./components/productList/ProductList";
import Feature from "./pages/feature/Feature";
import Wishlist from "./pages/wishList/WishList";
import Compare from "./pages/compare/Compare";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/feature", element: <Feature /> },
        { path: "/register", element: <Registration /> },
        {path:"/product/:id", element:<SingleProduct/>},
        {path:"/allproducts", element:<AllProducts title={"All Products"}/>},
        {path:"/ProductList", element:<ProductList/>},
        {path:"/products/categories/:id", element:<Category/>},
        {path:"/cart", element:<Cart/>},
        {path:"/wishList", element:<Wishlist/>},
        {path:"/compare", element:<Compare/>},
        {
          path: "/contact",
          element: <ContactUs />,
        },
        
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
