import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import CategoriesList from "../Components/CategoriesList ";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // Retrieve data from the loader
  const products = useLoaderData();

  return (
    <div>
      {/* Dynamic Title */}
      <Helmet>
        <title>Home - Explore Cutting-Edge Gadgets</title>
      </Helmet>

      <ToastContainer />
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title="Explore Cutting-Edge Gadgets"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />
      {/* Categories List */}
      {/* <CategoriesList categories={products} /> */}
      {/* Dynamic Nested Component */}
      <Outlet />
    </div>
  );
};

export default Home;
