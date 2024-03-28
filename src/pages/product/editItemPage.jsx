import React, { useState } from "react";
import { Button, Input, List, Page } from "zmp-ui";
import "../../css/itemEdit.scss";

export default function ExamplePage() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (itemName.trim() !== "") {
      setItems([...items, itemName]);
      setItemName("");
    }
  };

  const editItem = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setItemName(items[index]);
  };

  const updateItem = () => {
    if (itemName.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex] = itemName;
      setItems(updatedItems);
      setEditMode(false);
      setEditIndex(null);
      setItemName("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <Page className="item">
      <h1>Item Management</h1>
      <Input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      {editMode ? (
        <Button onClick={updateItem}>Update Item</Button>
      ) : (
        <Button onClick={addItem}>Add Item</Button>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h1>{item}</h1>
            <div>
              <Button onClick={() => editItem(index)}>Edit</Button>
              <Button onClick={() => deleteItem(index)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  );
}
