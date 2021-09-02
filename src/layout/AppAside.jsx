import { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

class AppASide extends Component {
  render() {
    return (
      <div>
        <div className="logo">React</div>
        <Menu defaultSelectedKeys={["test1"]} mode="vertical">
          <Menu.Item key="test1" icon={<AppstoreOutlined />}>
            <Link to="/test1">首页</Link>
          </Menu.Item>
          <Menu.Item key="test2" icon={<SettingOutlined />}>
            <Link to="/test2">配置</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default AppASide;
