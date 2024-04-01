import React, { useEffect, useState } from "react";
import "../../css/dragNdrop.scss";
import DragNDrop from "./dragNdrop";

const defaultData = [
  { title: "group 1", items: ["1", "2", "3"] },
  { title: "group 2", items: ["4", "5"] },
  // { title: "group 3", items: ["6", "7", "8"] },
  // { title: "group 4", items: ["9", "0"] },
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
