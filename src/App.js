import { useState } from "react";
import Items from "./components/items";
import AddItem from "./components/add_new_item";
import "./App.css";
import { Button } from "reactstrap";

function App() {
  const [items, setItems] = useState([
    { product_name: "mac pro", quantity: 22 },
    { product_name: "one plus", quantity: 2 },
    { product_name: "hp laptop", quantity: 30 },
    { product_name: "lenovo laptop", quantity: 40 },
  ]);
  const [newItem, setNewItem] = useState(false);
  const buttonClick = () => {
    setNewItem(!newItem);
  };
  const deleteHandler = (indexValue) => {
    const newItems = items.filter((item, index) => index !== indexValue);
    setItems(newItems);
  };

  return (
    <center>
      <h1>Inventory app for electronics</h1>
      <Button onClick={buttonClick} color="success">
        AddItem
      </Button>
      {newItem && <AddItem items={items} buttonClick={buttonClick} />}
      <Items items={items} setItems={setItems} deleteHandler={deleteHandler} />
    </center>
  );
}

export default App;
