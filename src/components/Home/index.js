import { connect } from "react-redux";
import Home from "./Home";
import { login } from "../../actions";

const mapStateToProps = ({ appData }) => ({
  token: appData.sessionToken,
  errs: appData.authErrs
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);