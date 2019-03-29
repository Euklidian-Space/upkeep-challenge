import React from "react";

const WorkOrder = props => {
  const { dueDate, title, priority, description } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{priority}</td>
      <td>{dueDate}</td>
    </tr>
  );
};

export default WorkOrder;