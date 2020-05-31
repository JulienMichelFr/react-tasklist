import PropTypes from "prop-types";
import { TaskStatus } from "../task-status.const";

export const TaskPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  status: PropTypes.oneOf(Object.values(TaskStatus)).isRequired,
});
