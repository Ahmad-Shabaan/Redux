import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import "./Products.css";
import Overlay from "../components/Overlay";
import AddNewItem from "../components/AddNewItem";
export default function Products({
  secIndex,
  fun,
  overlay,
  typeOp,
  sectionItem,
  UpdateItemData,
  imgCloud,
}) {
  const _template = useSelector((state) => state.template);
  const template = _template.template;
  const generated = _template.generated;

  const [itemIndex, setItemIndex] = useState(0);
  const items = template.sections[secIndex].items;
  const myInputs = Object.keys(items[0]);
  return (
    <div>
      <h2>Products and Services</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {items.map((item, index) => (
          <Card
            style={{ width: "18rem" }}
            key={item.title + item.description + index.toString()}
          >
            <Card.Img variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.price}$</Card.Text>
              <Card.Text>{item.category}</Card.Text>
              <Card.Text>{item.count}</Card.Text>
              <Button style={{ width: "100%" }}>Buy Now</Button>
              {!generated && (
                <div className="flex-space">
                  <Button
                    variant="warning"
                    onClick={() => {
                      fun.updateItem(item, index);
                      setItemIndex(index);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      fun.deleteItem(index);
                      setItemIndex(index);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
        {!generated && (
          <AddNewItem handleAddingRef={fun.addItem} height={500} />
        )}
        {overlay.val && (
          <Overlay
            toggleOverlayRef={overlay.fun}
            typeOperation={typeOp.val}
            data={sectionItem}
            updateData={UpdateItemData}
            imgUrl={imgCloud.val}
            updateUrlImg={imgCloud.fun}
            myInputs={myInputs}
            secIndex={secIndex}
            itemIndex={itemIndex}
          />
        )}
      </div>
    </div>
  );
}
