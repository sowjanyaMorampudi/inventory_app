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
  const closeform = () => {
    setModelclose(false);
    buttonClick();
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
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Additem;
