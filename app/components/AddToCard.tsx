"use client";
import React from "react";

const AddToCard = () => {
  return (
    <button
      className="btn btn-sucess"
      onClick={() => {
        console.log("Clicked");
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCard;
