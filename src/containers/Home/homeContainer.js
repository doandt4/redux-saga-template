import { connect } from "react-redux";
import { getList } from "actions/Auth";
import Home from "components/Home";
import { incrementCount, decrementCount } from "actions/Count";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getList()),
  incrementCount: () => dispatch(incrementCount()),
  decrementCount: () => dispatch(decrementCount()),
  incrementDouble: () =>
    dispatch({
      type: "DOUBLE_COUNT",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
