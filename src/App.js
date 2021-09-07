import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/redux/reducers";
import loadable from "./utils/loadable";
import "./App.css";

const DefalutLayout = loadable(() => import("./layout/Index.jsx"));
const Login = loadable(() => import("./views/Login"));
const Containers = loadable(() => import("./store/containers/index.js"));

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/counter" component={Containers}></Route>
          <Route path="/" component={DefalutLayout}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
