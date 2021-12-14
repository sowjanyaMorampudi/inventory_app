import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Update = ({ items, setItems, updateHandler, editItem, editIndex }) => {
  const [updateItem, setUpdateItem] = useState({
    product_name: editItem.product_name,
    quantity: editItem.quantity,
  });
  //   console.log(updateItem);
  const [modelClose, setModelClose] = useState(true);
  const changeHandler = (e) => {
    setUpdateItem({ ...updateItem, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const finalData = items.map((item, index) => {
      if (index === editIndex) {
        const updatedValue = { ...item, ...updateItem };
        return updatedValue;
      } else {
        return item;
      }
    });
    // console.log("final data::", finalData);
    setItems(finalData);

    setModelClose(false);
    updateHandler();
  };
  const closeForm = () => {
    setModelClose(false);
    updateHandler();
  };
  return (
    <div>
      <Modal isOpen={modelClose} size="lg">
        <ModalHeader toggle={closeForm}></ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="productName">product_name</Label>
              <Input
                type="text"
                name="product_name"
                value={updateItem.product_name}
                onChange={changeHandler}
                id="productName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">quantity</Label>
              <Input
                type="text"
                name="quantity"
                onChange={changeHandler}
                value={updateItem.quantity}
                id="quantity"
              />
            </FormGroup>
            <Button>save</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Update;
