import { useState } from "react";
import { Card, CardBody, CardGroup, CardTitle, Col, Button } from "reactstrap";
import Update from "./update_model";
const Items = ({ items, setItems, deletehandler }) => {
  const [newitem, setNewitem] = useState(false);
  const [editItem, setEditItem] = useState();
  const buttonClick = (item) => {
    setNewitem(!newitem);
    setEditItem(item);
  };
  return (
    <>
      <CardGroup>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Col md="12">
                <Card className="m-2">
                  <CardTitle>
                    {item.product_name}:{item.quantity}
                    <CardBody>
                      <button
                        onClick={() => deletehandler(index)}
                        className="mb-2"
                      >
                        Delete
                      </button>
                      <br />
                      <button
                        onClick={() => {
                          buttonClick(item);
                        }}
                      >
                        update
                      </button>
                      {newitem && (
                        <Update
                          items={items}
                          setItems={setItems}
                          buttonClick={buttonClick}
                          editItem={editItem}
                        />
                      )}
                    </CardBody>
                  </CardTitle>
                </Card>
              </Col>
            </div>
          );
        })}
      </CardGroup>
    </>
  );
};

export default Items;
