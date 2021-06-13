import React from "react";
import "./style.scss";

export default function NoProduct(props) {
  return (
    <div>
      <div className="face">
        <div className="band">
          <div className="red" />
          <div className="white" />
          <div className="blue" />
        </div>
        <div className="eyes" />
        <div className="dimples" />
        <div className="mouth" />
      </div>
      <h1 className="no-product-title">{props.content}</h1>
    </div>
  );
}
