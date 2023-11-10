import React, { useState } from "react";
import "./Testimonies.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Overlay from "../components/Overlay";
import AddNewItem from "../components/AddNewItem";
const Testimonies = ({
  secIndex,
  fun,
  overlay,
  typeOp,
  sectionItem,
  UpdateItemData,
  imgCloud,
}) => {
  const _template = useSelector((state) => state.template);
  const template = _template.template;
  const generated = _template.generated;

  const [itemIndex, setItemIndex] = useState(0);
  const items = template.sections[secIndex].items;
  const myInputs = Object.keys(items[0]);

  return (
    <div className="testimonies-container">
      <h2>testimonies ...</h2>
      <div className="testimony-list">
        {template.sections[secIndex].items.map((testimony, index) => (
          <div
            key={testimony.text + testimony.author + index.toString()}
            className="testimony"
          >
            <p className="testimony-text">{testimony.text}</p>
            <p className="testimony-author">- {testimony.author}</p>
            {!generated && (
              <div className="flex-space">
                <Button
                  variant="warning"
                  onClick={() => {
                    fun.updateItem(testimony, index);
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
          </div>
        ))}
        {!generated && (
          <AddNewItem handleAddingRef={fun.addItem} height={120} />
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
};
export default Testimonies;
