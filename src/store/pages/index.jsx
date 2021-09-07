import { Component } from "react";
import { Button } from "antd";

class Counter extends Component {
  countAdd = () => {
    this.props.countAdd();
  };
  countSub = () => {
    this.props.countSub();
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Button type="primary" onClick={this.countSub}>
          减一
        </Button>
        <span>{this.props.count}</span>
        <Button type="primary" onClick={this.countAdd}>
          加一
        </Button>
      </div>
    );
  }
}

export default Counter;
