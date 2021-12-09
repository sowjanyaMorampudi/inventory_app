import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const Additem = ({ items, setItems, buttonClick }) => {
  const [additem, setAdditem] = useState({ product_name: "", quantity: "" });
  const [modelclose, setModelclose] = useState(true);
  const changeHandler = (e) => {
    setAdditem({ ...additem, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setItems([...items, additem]);
    setModelclose(false);
    buttonClick();
  };
  const updatehandler = (e, index) => {
    const newItems = [...items];
    newItems[index].name = e.target.value;
    setItems(newItems);
  };
  return (
    <div>
      <Modal isOpen={modelclose} size="lg">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="product_name"
              name="product_name"
              onChange={changeHandler}
            />
            <br />
            <input
              type="text"
              placeholder="quantity"
              name="quantity"
              onChange={changeHandler}
            />
            <br />

            <input type="submit" value="save" onClick={updatehandler} />
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Additem;
