import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorkOrders from "./WorkOrders";
import { fetchWorkOrders } from "../../actions";
import "./styles.css";

const getPriority = n => ["None", "Low", "Medium", "High"][n];

const formatDateString = dateString => (new Date(dateString)).toDateString();

const prepWorkOrders = workOrders => workOrders.map(w => ({
  ...w,
  priority: getPriority(w.priority),
  dueDate: formatDateString(w.dueDate)
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

  return <WorkOrders orders={props.workOrders ? prepWorkOrders(props.workOrders) : []} />;
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