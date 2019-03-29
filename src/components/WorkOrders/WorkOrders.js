import React from "react";
import WorkOrder from "./WorkOrder";

const tableHead = () => (
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Priority</th>
    <th>Due Date</th>
  </tr>
);

const table = orders => (
  <table>
    <tbody>
      {tableHead()}
      {orders.map((order, idx) => {
        const { title, description, priority, dueDate } = order;

        return (
          <WorkOrder
            title={title}
            description={description}
            priority={priority}
            dueDate={dueDate}
            key={idx + description}
          />
        );
      })}
    </tbody>
  </table>
);

const WorkOrders = props => {
  const { orders } = props;

  return (
    <div className="TableContainer">
      <h1>Work Orders</h1>
      {table(orders)}
    </div>
  )
};

export default WorkOrders;