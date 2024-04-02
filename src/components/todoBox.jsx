import "../css/dragNdrop.scss";
export default function TodoBox({ data }) {
  return (
    <div className="todo">
      <div>
        <span className="todo-check">{data.finished ? "x" : "~"}</span>
        <span className="todo-content">{data.content}</span>
      </div>
      <div>
        <span className="todo-date">{data.date.toLocaleString()}</span>
        <span className="todo-date">{data.time}</span>
      </div>
    </div>
  );
}
