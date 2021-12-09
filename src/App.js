import { useState } from "react";
import Items from "./components/items";
import Additem from "./components/add_newitem";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { product_name: "mac pro", quantity: 22 },
    { product_name: "one plus", quantity: 2 },
    { product_name: "hp laptop", quantity: 30 },
  ]);
  const [newitem, setNewitem] = useState(false);
  const buttonClick = () => {
    setNewitem(!newitem);
  };
  const deletehandler = (indexValue) => {
    const newItems = items.filter((item, index) => index !== indexValue);
    setItems(newItems);
  };

  return (
    <center>
      <h1>Inventory app for electronics</h1>
      <button
        onClick={buttonClick}
        style={{ backgroundColor: "green", color: "white" }}
      >
        AddItem
      </button>
      {newitem && (
        <Additem items={items} setItems={setItems} buttonClick={buttonClick} />
      )}
      <Items items={items} setItems={setItems} deletehandler={deletehandler} />
    </center>
  );
}

export default App;
