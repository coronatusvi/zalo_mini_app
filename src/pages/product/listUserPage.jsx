import React, { useState } from "react";
import { Box, Button, ImageViewer, Input, Page, Text } from "zmp-ui";
import "../../css/itemEdit.scss";

export default function ExamplePage() {
  const [items, setItems] = useState([
    {
      avatar: "https://zaloweb.me/wp-content/uploads/2022/01/zalo-web.jpg",
      name: "Zalo",
      age: "15",
    },
  ]);
  const [itemData, setItemData] = useState({ avatar: "", name: "", age: "" });
  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const addItem = () => {
    if (itemData.name.trim() !== "") {
      setImages([...images, itemData.avatar]);
      setItems([...items, itemData]);
      setItemData({ avatar: "", name: "", age: "" });
    }
  };

  const editItem = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setItemData(items[index]);
  };

  const updateItem = () => {
    if (itemData.name.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex] = itemData;
      setItems(updatedItems);
      setEditMode(false);
      setEditIndex(null);
      setItemData({ avatar: "", name: "", age: "" });
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <Page>
      <h2 className="item">User Management</h2>
      <Box>
        <Text>Avata</Text>
        <Input
          type="text"
          placeholder="Enter url avata"
          value={itemData.avatar}
          onChange={(e) => setItemData({ ...itemData, avatar: e.target.value })}
        />
      </Box>
      <Box>
        <Text>Display Name</Text>
        <Input
          type="text"
          placeholder="Enter name"
          value={itemData.name}
          onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
        />
      </Box>
      <Box>
        <Text>Age</Text>
        <Input
          type="text"
          placeholder="Enter age"
          value={itemData.age}
          onChange={(e) => setItemData({ ...itemData, age: e.target.value })}
        />
      </Box>
      {editMode ? (
        <Button onClick={updateItem}>Update Item</Button>
      ) : (
        <Button onClick={addItem}>Add Item</Button>
      )}
      <div>
        {items.map((item, index) => (
          <div key={index} className="boxuser">
            <div className="user">
              <Box>
                <img
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  role="presentation"
                  onClick={() => {
                    setActiveIndex(1);
                    setVisible(true);
                  }}
                  src={item.avatar}
                  alt={0}
                />
              </Box>

              <ImageViewer
                onClose={() => setVisible(false)}
                activeIndex={activeIndex}
                images={images}
                visible={visible}
              />
              <div>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
              </div>
            </div>
            <div>
              <Button onClick={() => editItem(index)}>Edit</Button>
              <Button onClick={() => deleteItem(index)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
