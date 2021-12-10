import { useState } from "react";
import { Button, Card, CardBody, CardGroup, CardTitle, Col } from "reactstrap";
import Update from "./update_model";
const Items = ({ items, setItems, deletehandler }) => {
  const [newitem, setNewitem] = useState(false);
  const [editItem, setEditItem] = useState();
  const updatehandler = (item) => {
    setNewitem(!newitem);
    setEditItem(item);
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
                        deletehandler(index);
                      }}
                      className="mb-2"
                    >
                      Delete
                    </Button>
                    <br />
                    <Button
                      color="primary"
                      onClick={() => {
                        updatehandler(item);
                      }}
                    >
                      update
                    </Button>
                    {newitem && (
                      <Update
                        items={items}
                        setItems={setItems}
                        updatehandler={updatehandler}
                        editItem={editItem}
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
