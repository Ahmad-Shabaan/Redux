import React from "react";
import { Card } from "react-bootstrap";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function AddNewItem({ handleAddingRef , height }) {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "#ddd" }}
      onClick={handleAddingRef}
    >
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: `${height}px`,
        }}
      >
        <MdOutlineAddCircleOutline
          style={{
            color: "red",
            fontSize: "50px",
            cursor: "pointer",
          }}
        />
      </Card.Body>
    </Card>
  );
}
