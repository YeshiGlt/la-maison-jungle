import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
      <QuestionForm />
    </React.Fragment>
  );
}

export default App;
