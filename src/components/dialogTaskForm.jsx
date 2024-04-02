import { useState } from "react";
import { useDialog } from "react-st-modal";
import { Box, Button, Input, Page } from "zmp-ui";

export default function CustomDialogContent({ task, onSave }) {
  const dialog = useDialog();
  const [formData, setFormData] = useState({
    content: task.content,
    date: task.date,
    time: task.time,
  });

  function handleSave() {
    const updatedTask = { ...task, ...formData };
    console.log(formData);
    onSave(updatedTask);
    dialog.close();
  }

  function handleChange(e) {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="task-todo">
      <div>
        <Box className="task-dialog-time">
          <Input
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />{" "}
          <Input
            label="Time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </Box>
        <div>
          <Input
            label="Content"
            type="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="task-content"
          />
        </div>
      </div>
      <Button className="handle-todo" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
