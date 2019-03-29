import React from "react";
import { Form, Field } from "react-final-form";
import "./styles.css";

const onSubmit = values => alert(JSON.stringify(values));

const WrappedWorkOrderForm = () => (
  <Form
    onSubmit={onSubmit}
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
        <button
          type="button"
          onClick={form.reset}
          disabled={submitting || pristine}
        >
          Submit
        </button>
      </form>
    )}
  />
);

export default WrappedWorkOrderForm;