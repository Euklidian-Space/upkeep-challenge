import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = ({ appData }) => ({
  errs: appData.authErrs
});

export default connect(mapStateToProps)(Home);