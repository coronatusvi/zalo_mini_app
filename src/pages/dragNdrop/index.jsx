import React, { useEffect, useState } from "react";
import "../../css/dragNdrop.scss";
import DragNDrop from "./dragNdrop";

const defaultData = [
  { title: "[   I    ]", items: ["Task 1", "Task 2"], finished: false },
  { title: "[   II   ]", items: ["Task 4", "Task 5"], finished: false },
  { title: "[   III   ]", items: ["Task 6", "Task 7"], finished: false },
  { title: "[   IV   ]", items: ["Task 9", "Task 10"], finished: false },
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
