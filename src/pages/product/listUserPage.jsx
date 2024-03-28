import React, { useState } from "react";
import { Box, Button, ImageViewer, Input, Page, Text } from "zmp-ui";
import "../../css/itemEdit.scss";
import "../../css/app.scss";

export default function ExamplePage() {
  const [items, setItems] = useState([
    {
      avatar: "https://zaloweb.me/wp-content/uploads/2022/01/zalo-web.jpg",
      name: "Zalo",
      age: "15",
    },
  ]);
  const imgUrl =
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";
  const [itemData, setItemData] = useState({
    avatar: "",
    name: "",
    age: "",
  });
  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const addItem = () => {
    if (itemData.name.trim() !== "") {
      if (itemData.avatar != "") {
        setItems([...items, itemData]);
      } else {
        itemData.avatar = imgUrl;
        setItems([...items, itemData]);
      }
      setItemData({ avatar: imgUrl, name: "", age: "" });
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
        <Button id="update" onClick={updateItem}>
          Update Item
        </Button>
      ) : (
        <Button id="add" onClick={addItem}>
          Add Item
        </Button>
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
              <div className="text-edit">
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
              </div>
            </div>
            <div className="edit">
              <Button onClick={() => editItem(index)}>Edit</Button>
              <Button onClick={() => deleteItem(index)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
