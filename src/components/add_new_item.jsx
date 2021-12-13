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
const AddItem = ({ items, buttonClick }) => {
  const [addItem, setAddItem] = useState({ product_name: "", quantity: "" });
  const [modelClose, setModelClose] = useState(true);
  const changeHandler = (e) => {
    setAddItem({ ...addItem, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    items.push(addItem);

    setModelClose(false);
    buttonClick();
  };
  const closeForm = () => {
    setModelClose(false);
    buttonClick();
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

export default AddItem;
