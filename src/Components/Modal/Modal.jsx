import React from "react";
import { useUser } from "../../usercontext";
import "./Modal.css";

export default function Modal() {
  const { selectedItem, setSelectedItem } = useUser();

  if (!selectedItem) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setSelectedItem(null)}>
          ×
        </button>
        <h2>{selectedItem.name}</h2>
        <img
          src={selectedItem.image}
          alt={selectedItem.name}
          className="modal-image"
        />
        <p>{selectedItem.description}</p>
        <p className="price">{selectedItem.price}</p>
      </div>
    </div>
  );
}
