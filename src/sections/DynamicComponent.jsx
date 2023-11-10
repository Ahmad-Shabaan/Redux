import React, { useState } from "react";
import Testimonies from "./Testimonies";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { updateTemplate } from "../redux/services/templateSlice";

function DynamicComponent({ sectionType, secIndex }) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.template.template);
  const items = template.sections[secIndex].items;
  const myInputs = Object.keys(items[0]);

  const createObjectFromArray = (array) => {
    const obj = {};
    array.forEach((key) => {
      obj[key] = "";
    });
    return obj;
  };

  const initialValue = createObjectFromArray(myInputs);

  const [sectionItem, setSectionItem] = useState(initialValue);
  const [imgUrl, setImgUrl] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [typeOperation, setTypeOperation] = useState("");

  const UpdateItemData = (itemData) => {
    setSectionItem(itemData);
  };
  const updateUrlImg = (newImgUrl) => {
    setImgUrl(newImgUrl);
  };

  const toggleOverlay = () => {
    setShowOverlay(false);
  };
  const handleTypeOperation = (type) => {
    setTypeOperation(type);
  };

  // functions of ( Edit , Adding , Deleting)
  // Handle update item Fun
  const handleUpdateItem = (properties, index) => {
    setSectionItem({ ...properties, id: index });
    setShowOverlay(true);
    setTypeOperation("edit");
  };

  // Handle Delete Item Fun
  const handleDeleteItem = (index) => {
    let newSections = [...template.sections];

    let newItems = newSections[secIndex].items.filter((item, i) => {
      return i !== index ? item : "";
    });
    let updatedSection = {
      ...newSections[secIndex],
      items: newItems,
    };

    // update section
    newSections[secIndex] = updatedSection;

    dispatch(updateTemplate({ ...template, sections: newSections }));
  };

  // Handle Add New Item Fun
  const handleAdding = () => {
    setSectionItem(initialValue);
    setShowOverlay(true);
    setTypeOperation("add");
  };

  const fun = {
    addItem: handleAdding,
    updateItem: handleUpdateItem,
    deleteItem: handleDeleteItem,
  };

  const overlay = {
    val: showOverlay,
    fun: toggleOverlay,
  };
  const typeOp = {
    val: typeOperation,
    fun: handleTypeOperation,
  };

  const imgCloud = {
    val: imgUrl,
    fun: updateUrlImg,
  };

  // Define your components
  const TestimonialsSection = (
    <Testimonies
      secIndex={secIndex}
      fun={fun}
      overlay={overlay}
      typeOp={typeOp}
      imgCloud={imgCloud}
      sectionItem={sectionItem}
      UpdateItemData={UpdateItemData}
    />
  );
  const ProductsSections = (
    <Products
      secIndex={secIndex}
      fun={fun}
      overlay={overlay}
      typeOp={typeOp}
      imgCloud={imgCloud}
      sectionItem={sectionItem}
      UpdateItemData={UpdateItemData}
    />
  );
  // Conditionally render a component based on the value of sectionType
  let renderedComponent;
  if (sectionType === "testimonies") {
    renderedComponent = TestimonialsSection;
  } else if (sectionType === "products") {
    renderedComponent = ProductsSections;
  } else {
    renderedComponent = <div>Unknown Component</div>;
  }

  return renderedComponent;
}

export default DynamicComponent;
