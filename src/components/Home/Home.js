import React, { useState } from "react";
import WorkOrders from "../WorkOrders";
import WorkOrderForm from "../WorkOrderForm";
import { PrimaryButton } from "../common";

const initialState = {
  showWorkOrderForm: false,
  showWorkOrders: false
};

const Home = () => {
  const [state, setState] = useState(initialState);

  return (
    <div className="home-container">
      {state.showWorkOrders ?
        <WorkOrders />
        :
        null
      }
      {
        state.showWorkOrderForm ?
          <div style={{ marginTop: 40 }}>
            <WorkOrderForm />
          </div>
          :
          null
      }
      <div className="buttons">
        <PrimaryButton onClick={() => setState({ showWorkOrders: true })}>
          Work Orders   
        </PrimaryButton> 
        <PrimaryButton onClick={() => setState({ showWorkOrderForm: true })}>
          Create Work Order   
        </PrimaryButton> 
      </div>
    </div>
  );
};

export default Home;