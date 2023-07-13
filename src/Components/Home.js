import React from "react";
import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProducts from "./SingleProducts";
import "./Styles.css";

function Home(props) {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
