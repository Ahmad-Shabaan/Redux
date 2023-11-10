import React, { useState } from "react";
import { changeItemDetails, addItem } from "../redux/services/templateSlice";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import UploadWidget from "./UploadWidget";
import { IoCheckmarkDone } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

export default function Overlay({
  toggleOverlayRef,
  data,
  updateData,
  typeOperation,
  updateUrlImg,
  imgUrl,
  myInputs,
  secIndex,
  itemIndex,
}) {
  const dispatch = useDispatch();
  const [btn, setBtn] = useState(false);
  const hasImg = myInputs.find((ele) => ele === "imgUrl");

  function handleOnUpload(error, result, widget) {
    if (error) {
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrlImg(result?.info?.secure_url);
    setBtn(true);
  }

  // const [myObj, setMyObj] = useState(data);
  const handleChangeInput = (e, key) => {
    updateData({ ...data, [key]: e.target.value });
  };
  return (
    <div className="overlay">
      <div className="overlay-content">
        <ImCancelCircle className="cancel" onClick={() => toggleOverlayRef()} />
        {myInputs.map((i) => {
          if (i === "imgUrl") return null;
          return (
            <React.Fragment key={i + i}>
              <label htmlFor={i}>{i}</label>
              <input
                id={i}
                type="text"
                placeholder="Enter something..."
                value={data[i]}
                onChange={(e) => {
                  handleChangeInput(e, i);
                }}
              />
            </React.Fragment>
          );
        })}
        {hasImg && (
          <>
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                function handleOnClick(e) {
                  e.preventDefault();
                  open();
                }
                return (
                  <button style={{ display: "block" }} onClick={handleOnClick}>
                    {btn === true ? <IoCheckmarkDone /> : "Upload an Image"}
                  </button>
                );
              }}
            </UploadWidget>

            <Button
              onClick={() => {
                let itemData;
                if (typeOperation === "add") {
                  itemData = { ...data, imgUrl: imgUrl };
                  dispatch(addItem({ itemData, secIndex }));
                } else {
                  if (btn) {
                    itemData = { ...data, imgUrl: imgUrl };
                    dispatch(
                      changeItemDetails({ itemData, secIndex, itemIndex })
                    );
                  } else {
                    itemData = data;
                    dispatch(changeItemDetails({itemData, secIndex, itemIndex}));
                  }
                }
                toggleOverlayRef();
              }}
              variant="warning"
            >
              {typeOperation === "add" ? "Add New Item" : "Change Item"}
            </Button>
          </>
        )}
        {!hasImg && (
          <Button
            onClick={() => {
              let itemData = { ...data };
              if (typeOperation === "add") {
                dispatch(addItem({ itemData, secIndex }));
              } else {
                dispatch(changeItemDetails({ itemData, secIndex, itemIndex }));
              }
              toggleOverlayRef();
            }}
            variant="warning"
          >
            {typeOperation === "add" ? "Add New Item" : "Change Item"}
          </Button>
        )}
      </div>
    </div>
  );
}
