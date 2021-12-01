import React from 'react';
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

interface LoginFormProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
    validateFields: Function;
  };
  handleSubmit: Function;
}
const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {
  const { getFieldProps, getFieldsValue, validateFields } = form;
  const submit = () => {
    validateFields((error: any, values: any) => {
      if (error) return;
      let value = getFieldsValue();
      console.log(value);
      handleSubmit(value);
    });
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name', {
          rules: [{ required: true, message: '请输入账号' }],
        })}
        type="text"
        placeholder="请输入账号"
        clear
      >
        账号
      </InputItem>
      <InputItem
        {...getFieldProps('password', {
          rules: [{ required: true, message: '请输入密码' }],
        })}
        type="password"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>
        登录
      </Button>
    </WingBlank>
  );
};
export default createForm()(LoginForm);
