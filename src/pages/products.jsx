import { useContext, useEffect, useState } from "react";
import CardProdcts from "../components/Fragments/CardProdcts";
import { getProducts } from "../services/products.services";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../components/Fragments/TableCard";
import NavBar from "../components/Layout/NavBar";
import { DarkMode } from "../context/DarkMode";

// const products = [
//   {
//     id: 1,
//     image: "/images/products.jpg",
//     name: "Sepatu Adidas",
//     price: 1000000,
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat odit
//           incidunt laboriosam sunt repudiandae dicta, ab nemo odio at. Aperiam
//           eaque deserunt officiis praesentium quibusdam provident quo atque
//           natus dolorem.`,
//   },
//   {
//     id: 2,
//     image: "/images/products.jpg",
//     name: "Sepatu Merah",
//     price: 2000000,
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat odit
//           incidunt laboriosam sunt repudiandae dicta, ab nemo odio at. Aperiam
//           eaque.`,
//   },
//   {
//     id: 3,
//     image: "/images/products.jpg",
//     name: "Sepatu Bagus",
//     price: 500000,
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat odit
//           incidunt laboriosam sunt repudiandae dicta.`,
//   },
// ];

const ProductsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProdcts key={product.id}>
                <CardProdcts.Header image={product.image} id={product.id} />
                <CardProdcts.Body name={product.title}>
                  {product.description}
                </CardProdcts.Body>
                <CardProdcts.Footer price={product.price} id={product.id} />
              </CardProdcts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCard products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
