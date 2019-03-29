import React from "react";
import { connect } from "react-redux";
import { createWorkOrder } from "../../actions";
import { flow } from "lodash/fp";
import WorkOrderForm from "./WorkOrderForm";
import FormStyles from "./styles";

const getPriority = priority => ({
  None: 0,
  Low: 1,
  Medium: 2,
  High: 3
}[priority]);

const convertToMiliSeconds = dateString => Date.parse(dateString);

const mapStateToProps = ({ appData }) => ({
  errs: appData.errs
});

const mapDispatchToProps = {
  onSubmit: values => createWorkOrder({
    title: values.title,
    description: values.description,
    priority: getPriority(values.priority),
    dueDate: convertToMiliSeconds(values.dueDate)
  })
};

const connectToRedux = connect(mapStateToProps, mapDispatchToProps);

const styleForm = ComposedComponent => () => (
  <FormStyles>
    <ComposedComponent />
  </FormStyles>
);

const styleAndConnectWorkOrderForm = flow(
  connectToRedux,
  styleForm
);


export default styleAndConnectWorkOrderForm(WorkOrderForm);