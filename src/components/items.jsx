import { useState } from "react";
import { Card, CardGroup } from "reactstrap";
import Additem from "./add_newitem";
const Items = ({ items, deletehandler, updatehandler }) => {
  const [newitem, setNewitem] = useState(false);
  const buttonClick = () => {
    setNewitem(!newitem);
  };
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.product_name}:{item.quantity}
              <button onClick={() => deletehandler(index)}>Delete</button>
              <button onClick={buttonClick}>update</button>
              {newitem && <Additem />}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Items;
