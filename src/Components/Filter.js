import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Styles.css";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

function Filter(props) {
  const [rate, setRate] = useState();

  const {
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartState();

  console.log(byRating, sort);

  return (
    <div className="filters">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
              // payload: "",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: "10px" }}>Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
}

export default Filter;
