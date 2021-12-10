import { useState } from "react";
import Items from "./components/items";
import Additem from "./components/add_newitem";
import "./App.css";
import { Button } from "reactstrap";

function App() {
  const [items, setItems] = useState([
    { product_name: "mac pro", quantity: 22 },
    { product_name: "one plus", quantity: 2 },
    { product_name: "hp laptop", quantity: 30 },
    { product_name: "lenovo laptop", quantity: 40 },
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
      <Button onClick={buttonClick} color="success">
        AddItem
      </Button>
      {newitem && <Additem items={items} buttonClick={buttonClick} />}
      <Items items={items} setItems={setItems} deletehandler={deletehandler} />
    </center>
  );
}

export default App;
