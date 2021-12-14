import { useState } from "react";
import { Button, Card, CardBody, CardGroup, CardTitle, Col } from "reactstrap";
import Update from "./update_model";
const Items = ({ items, setItems, deleteHandler }) => {
  const [newItem, setNewItem] = useState(false);
  const [editItem, setEditItem] = useState();
  const [editIndex, setEditIndex] = useState();
  const updateHandler = (item, index) => {
    setNewItem(!newItem);
    setEditItem(item);
    setEditIndex(index);
  };
  return (
    <CardGroup>
      {items.map((item, index) => {
        return (
          <Col md="3">
            <div key={index}>
              <Card className="m-2 p-2" color="light">
                <CardTitle>
                  <p>product_name:{item.product_name}</p>
                  <p>quantity:{item.quantity}</p>
                  <CardBody>
                    <Button
                      color="danger"
                      onClick={() => {
                        deleteHandler(index);
                      }}
                      className="mb-2"
                    >
                      Delete
                    </Button>
                    <br />
                    <Button
                      color="primary"
                      onClick={() => {
                        updateHandler(item, index);
                      }}
                    >
                      update
                    </Button>
                    {newItem && (
                      <Update
                        items={items}
                        setItems={setItems}
                        updateHandler={updateHandler}
                        editItem={editItem}
                        editIndex={editIndex}
                      />
                    )}
                  </CardBody>
                </CardTitle>
              </Card>
            </div>
          </Col>
        );
      })}
    </CardGroup>
  );
};

export default Items;
