import React from "react";
import Index from "./Index";
import View from "./View";

export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is the Products Page.</p>
      <div className="w-full">

        <Index/>

        <View/>
      </div>
    </div>
  );
}
