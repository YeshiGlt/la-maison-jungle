import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
