export class TaskModel {
  constructor(content, date, time, finished = false) {
    this.finished = finished;
    this.content = content;
    this.date = date;
    this.time = time;
  }
}
