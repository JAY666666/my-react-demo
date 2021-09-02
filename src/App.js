import { HashRouter as Router, Route, Switch } from "react-router-dom";
import loadable from "./utils/loadable";
import "./App.css";

const DefalutLayout = loadable(() => import("./layout/Index.jsx"));
const Login = loadable(() => import("./views/Login"));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={DefalutLayout}></Route>
      </Switch>
    </Router>
  );
}

export default App;
