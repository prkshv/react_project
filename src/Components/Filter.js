import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Styles.css";
import Rating from "./Rating";

function Filter(props) {
  const [rate, setRate] = useState();
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
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
        />
      </span>
      <span>
        <label style={{ paddingRight: "10px" }}>Rating:</label>
        <Rating
          rating={rate}
          style={{ cursor: "pointer" }}
          onClick={(i) => setRate(i + 1)}
        />
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
}

export default Filter;
