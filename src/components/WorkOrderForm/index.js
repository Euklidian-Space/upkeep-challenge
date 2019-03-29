import React from "react";
import { Form, Field } from "react-final-form";
import "./styles.css";

const onSubmit = values => alert(JSON.stringify(values));

const WrappedWorkOrderForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
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
            render={({ input, meta }) => (
              <div>
                <input type="date" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          />
        </div>
      </form>
    )}
  />
);

export default WrappedWorkOrderForm;