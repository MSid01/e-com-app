import React from "react";
import "./App.css";
import GroceryCardGrid from "./components/GroceryCards";
import MenuAppBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <GroceryCardGrid />
    </div>
  );
}

export default App;
