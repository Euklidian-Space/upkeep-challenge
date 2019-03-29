import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorkOrders from "./WorkOrders";
import { fetchWorkOrders } from "../../actions";
import TableStyles from "./styles";
// import "./styles.css";

const getPriority = n => ["None", "Low", "Medium", "High"][n];

const formatDateString = dateString => (new Date(dateString)).toDateString();

const prepWorkOrders = workOrders => workOrders.map(workOrder => ({
  ...workOrder,
  priority: getPriority(workOrder.priority),
  dueDate: formatDateString(workOrder.dueDate)
}));

const ConnectedWorkOrders = props => {
  useEffect(() => {
    if (props.token) {
      props.fetchWorkOrders({
        token: props.token,
        opts: {
          limit: 10
        }
      });
    }
  }, [props.token]);

  return (
    <TableStyles>
      <WorkOrders orders={props.workOrders ? prepWorkOrders(props.workOrders) : []} />
    </TableStyles>
  );
};

const mapStateToProps = ({ appData }) => ({
  token: appData.sessionToken,
  workOrders: appData.workOrders,
  errs: appData.errs
});

const mapDispatchToProps = {
  fetchWorkOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedWorkOrders);