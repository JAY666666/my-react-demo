const initState = {
  count: 0,
};
export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "add":
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case "sub":
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
}
