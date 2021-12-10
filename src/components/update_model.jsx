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
    product_name: "",
    quantity: "",
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
  return (
    <div>
      <Modal isOpen={modelclose} size="lg">
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="productName">product_name</Label>
              <Input
                type="text"
                placeholder="product_name"
                name="product_name"
                onChange={changeHandler}
                id="productName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">quantity</Label>
              <Input
                type="text"
                placeholder="quantity"
                name="quantity"
                onChange={changeHandler}
                id="quantity"
              />
            </FormGroup>
            <Button>save</Button>
            {/* <input type="submit" value="save" /> */}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Update;
