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

const Update = ({ items, setItems, updatehandler, editItem }) => {
  const [updateitem, setUpdateitem] = useState({
    product_name: editItem.product_name,
    quantity: editItem.quantity,
  });
  //   console.log(updateitem);
  const [modelclose, setModelclose] = useState(true);
  const changeHandler = (e) => {
    setUpdateitem({ ...updateitem, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const finaldata = items.map((item, index) => {
      if (item.product_name === editItem.product_name) {
        const updatedvalue = { ...item, ...updateitem };
        return updatedvalue;
      } else {
        return item;
      }
    });
    // console.log("final data::", finaldata);
    setItems(finaldata);

    setModelclose(false);
    updatehandler();
  };
  const closeform = () => {
    setModelclose(false);
    updatehandler();
  };
  return (
    <div>
      <Modal isOpen={modelclose} size="lg">
        <ModalHeader toggle={closeform}></ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="productName">product_name</Label>
              <Input
                type="text"
                name="product_name"
                value={updateitem.product_name}
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
                value={updateitem.quantity}
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
