import { connect } from "react-redux";
import Counter from "../pages";
import { Add, Sub } from "../redux/actions/countActions";

const mapStateToProps = (state) => {
  console.log(state, "初始值");
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch, "触发");
  return {
    countAdd: (count) => {
      dispatch(Add);
    },
    countSub: (count) => {
      dispatch(Sub);
    },
  };
};

const Containers = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Containers;
