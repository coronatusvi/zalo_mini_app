import React, { useState, useRef, useEffect } from "react";
import TodoBox from "../../components/todoBox";
import { CustomDialog } from "react-st-modal";
import CustomDialogContent from "../../components/dialogTaskForm";
import { TaskModel } from "../../components/models/taskModel";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(data);
  }, [setList, data]);

  const dragItem = useRef();
  const dragItemNode = useRef();

  const handletDragStart = (e, item) => {
    console.log("Starting to drag", item);

    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetItem) => {
    console.log("Entering a drag target", targetItem);
    if (dragItemNode.current !== e.target) {
      console.log("Target is NOT the same as dragged item");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[targetItem.grpI].items.splice(
          targetItem.itemI,
          0,
          newList[dragItem.current.grpI].items.splice(
            dragItem.current.itemI,
            1
          )[0]
        );
        dragItem.current = targetItem;
        // localStorage.setItem("List", JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener("dragend", handleDragEnd);
    dragItemNode.current = null;
  };

  const getStyles = (item) => {
    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return "dnd-item current";
    }
    return "dnd-item";
  };

  const handleSaveTask = (updatedTask, grpI) => {
    setList((oldList) => {
      const newList = [...oldList];
      newList[grpI].items.push(updatedTask);
      return newList;
    });
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className="dnd-group"
          >
            <div className="group-header">
              <h3>{grp.title}</h3>
              <button
                className="add-button"
                onClick={async () => {
                  let newtask = new TaskModel();
                  await CustomDialog(
                    <CustomDialogContent
                      task={newtask}
                      onSave={(updatedTask) =>
                        handleSaveTask(updatedTask, grpI)
                      }
                    />,
                    {
                      title: "New Task!",
                      showCloseIcon: true,
                    }
                  );
                }}
              >
                +
              </button>
            </div>
            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={itemI}
                onDragStart={(e) => handletDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itemI });
                      }
                    : null
                }
                className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
              >
                <TodoBox data={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default DragNDrop;
