import React from "react";
import { Form, Field } from "react-final-form";

const WorkOrderForm = props => (
  <div>
    <h1>Create Work Order</h1>
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
            />
          </div>
          <div>
            <Field name="priority" component="select">
              <option />
              <option>None</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Field>
          </div>
          <div>
            <Field
              name="dueDate"
              component="input"
              type="date"
            />
          </div>
          <div className="buttonContainer">
            <button
              type="submit"
              onClick={form.submit}
              disabled={submitting || pristine}
            >
              Submit
          </button>
          </div>
        </form>
      )}
    />
  </div>
);

export default WorkOrderForm;
