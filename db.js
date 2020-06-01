const TaskStatus = {
  Todo: "todo",
  Completed: "completed",
  InProgress: "in-progress",
};

module.exports = () => ({
  tasks: [
    {
      id: 1,
      title: "Task 1",
      content: "Task 1 content",
      status: TaskStatus.Todo,
    },
    {
      id: 2,
      title: "Task 2",
      content: "Task 2 content",
      status: TaskStatus.InProgress,
    },
    {
      id: 3,
      title: "Task 3",
      content: "Task 3 content",
      status: TaskStatus.Completed,
    },
  ],
});
