import React, { useState } from "react";
import { Box, Button, ImageViewer, Input, Page, Text } from "zmp-ui";
import "../../css/itemEdit.scss";

export default function ExamplePage() {
  const [items, setItems] = useState([]);
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
    setItemName(items[index]);
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
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="user">
              <Box mt={2}>
                <Box flex flexDirection="row" flexWrap="nowrap">
                  {images.map((img, index) => (
                    <Box
                      mr={1}
                      key={index}
                      style={{
                        width: "68px",
                        height: "69px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        role="presentation"
                        onClick={() => {
                          setActiveIndex(index);
                          setVisible(true);
                        }}
                        src={img}
                        alt={index}
                      />
                    </Box>
                  ))}
                </Box>
                <ImageViewer
                  onClose={() => setVisible(false)}
                  activeIndex={activeIndex}
                  images={images}
                  visible={visible}
                />
              </Box>
              <div>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
              </div>
            </div>
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
