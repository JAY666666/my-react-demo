import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";
import AppHeader from "./AppHeader";
import AppSide from "./AppAside";
import "./layout.scss";

class DefalutLayout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="app-left">
          <AppSide />
        </div>
        <div className="app-right">
          <AppHeader></AppHeader>
          <Switch>
            {routes.map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                ></Route>
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default DefalutLayout;
