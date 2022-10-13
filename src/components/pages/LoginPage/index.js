import React, { useState, useEffect } from 'react';
import * as Authorization from "../../../services/Authorization";
import { LoginTemplate, LoginForm } from "components";
import { Redirect } from "react-router-dom";
import { Alert } from '@material-ui/lab';

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")).access_token : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = async event => {
    if(loginData.password === '') {
      setAlertContent('비밀번호를 입력하세요.');
      setAlertOpen(true);
      return;
    }

    setLoading(true);
    try {
      const response = await Authorization.loginCall(loginData);
      if(response === undefined) {
        setLoginData({
          password: ''
        });
        return;
      }
      localStorage.setItem("token", JSON.stringify(response.data)); // token을 localStorage에 저장
    } catch(e) {
      setLoginData({
        password: ''
      });
      let msg = null;
      if(e.response.data.error_description === 'Bad credentials') {
        msg = '비밀번호를 확인하고 다시 로그인 하세요.';
      } else {
        msg = e.response.data.message;
      }
      setAlertContent(msg);
      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  }

  if(token) return <Redirect to='/' />
  return (
    <LoginTemplate loading={loading}>
      <LoginForm
        onLogin={handleLogin}
        onInput={handleInput}
        password={loginData.password}
      />
      {alertOpen && <Alert severity="error">{alertContent}</Alert>}
    </LoginTemplate>
  );
}
