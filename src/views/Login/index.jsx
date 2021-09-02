import { Component } from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../api";
import { setToken } from "../../utils/auth";
import "./index.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
    };
  }

  handleLogin = async () => {
    let res = await login({
      phone: this.state.phone,
      password: this.state.password,
    });
    if (res.code === '1') {
      message.success({
        content: "登录成功啦",
      });
      setToken(res.data.token);
      this.props.history.push('/')
    }
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login">
        <div className="login-content">
          <span className="login-title">欢迎登录</span>
          <div className="login-input">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item rules={[{ required: true, message: "请输入用户名!" }]}>
                <Input
                  name="phone"
                  value={this.state.phone}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入用户名"
                  allowClear
                  onChange={this.handleInputChange}
                />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "请输入密码!" }]}>
                <Input
                  name="password"
                  value={this.state.password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                  allowClear
                  onChange={this.handleInputChange}
                />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item className="login-button">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={this.handleLogin}
                >
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
