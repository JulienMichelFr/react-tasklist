import React, { useState } from "react";
import PropTypes from "prop-types";
import { TaskStatus } from "../task/Task";

const TaskCreator = ({ onSubmit }) => {
  const [form, setForm] = useState({
    status: TaskStatus.Todo,
    content: "",
    title: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
    reset();
  }

  function handleFormChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function reset() {
    setForm({
      title: "",
      content: "",
      status: TaskStatus.Todo,
    });
  }

  const isInvalid = !(
    form.title?.length >= 3 && Object.values(TaskStatus).includes(form.status)
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col">
          <label htmlFor="title">Title</label>
          <input
            required
            minLength={3}
            type="text"
            className="form-control"
            name="title"
            id="title"
            onChange={handleFormChange}
            value={form.title}
          />
        </div>
        <div className="col">
          <label htmlFor="status">Status</label>
          <select
            className="form-control"
            required
            name="status"
            id="status"
            onChange={handleFormChange}
            value={form.status}
          >
            <option value={TaskStatus.Todo}>Todo</option>
            <option value={TaskStatus.InProgress}>In progress</option>
            <option value={TaskStatus.Completed}>Completed</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            className="form-control"
            onChange={handleFormChange}
            value={form.content}
          />
        </div>
      </div>
      <button
        type="submit"
        data-testid="add-task"
        className="btn btn-primary"
        disabled={isInvalid}
      >
        Add
      </button>
      <button
        type="reset"
        data-testid="reset-task"
        className="btn btn-warning"
        onClick={reset}
      >
        Reset
      </button>
    </form>
  );
};

TaskCreator.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default TaskCreator;
