import React from "react";

const WorkOrderForm = props => (
  <div>
    <h1>Create a Work Order</h1>
    <form onSubmit={props.onSubmit}>
      {props.renderFields()}
    </form>
  </div>
);

export default WorkOrderForm;