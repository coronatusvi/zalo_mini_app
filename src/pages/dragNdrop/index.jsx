import React, { useEffect, useState } from "react";
import "../../css/dragNdrop.scss";
import DragNDrop from "./dragNdrop";

const defaultData = [
  {
    title: "[ I ]",
    items: [
      {
        finished: false,
        content: "Task 1",
        date: new Date(Date.now()),
      },
      { finished: false, content: "Task 2", date: new Date() },
    ],
  },
  {
    title: "[ II ]",
    items: [
      { finished: false, content: "Task 4", date: new Date() },
      { finished: false, content: "Task 5", date: new Date() },
    ],
  },
  {
    title: "[ III ]",
    items: [
      { finished: false, content: "Task 6", date: new Date() },
      { finished: false, content: "Task 7", date: new Date() },
    ],
  },
  {
    title: "[ IV ]",
    items: [
      { finished: false, content: "Task 9", date: new Date() },
      { finished: false, content: "Task 10", date: new Date() },
    ],
  },
];

export default function DemoDragNdrop() {
  const [data, setData] = useState();
  useEffect(() => {
    if (localStorage.getItem("List")) {
      console.log(localStorage.getItem("List"));
      setData(JSON.parse(localStorage.getItem("List")));
    } else {
      setData(defaultData);
    }
  }, [setData]);
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
    </div>
  );
}
