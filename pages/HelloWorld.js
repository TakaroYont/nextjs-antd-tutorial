import React from "react";
import ShoppingList from "../components/shoppinglist";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ShoppingList name="张三"/>
      </div>
    );
  }
}

export default Hello;
