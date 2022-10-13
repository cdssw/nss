import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: '10px',
    },
  },
  btn: {
    fontFamily: 'AppleSDGothicNeoB00',
    fontSize: '1rem',
    height: '40px',
  },
  inputRoot: {
    borderRadius: '5px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.3)'
  }
}));

export default function LoginForm({username, password, onInput, onLogin}) {
  const classes = useStyles();

  const handleKeyPress = e => {
    if(e.key === 'Enter') onLogin();
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>NSS 로그인</div>
      <div className={classes.passwordWrap}>
        <TextField
          type="number"
          classes={{root: classes.inputRoot}}
          InputProps={{
            inputProps: {
              inputMode: 'numeric',
              style: {
                textSecurity: 'disc',
                WebkitTextSecurity: 'disc'
              }
            }
          }}
          fullWidth={true}
          variant="outlined"
          placeholder="비밀번호를 입력하세요."
          name="password"
          onChange={onInput} value={password}
          onKeyPress={handleKeyPress}
        />        
      </div>
      <div>
        <Button classes={{label: classes.btn}} color='primary' variant="contained" fullWidth={true} onClick={onLogin}>로그인</Button>
      </div>
    </div>
  );
}
