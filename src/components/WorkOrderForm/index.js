import { connect } from "react-redux";
import { createWorkOrder } from "../../actions";
import WorkOrderForm from "./WorkOrderForm";

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

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrderForm);