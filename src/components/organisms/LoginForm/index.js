import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { InputAdornment, TextField } from '@material-ui/core';
import * as resources from "constants/resources";

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
    backgroundColor: 'white',
    borderRadius: '5px',
  }
}));

export default function LoginForm({username, password, onInput, onLogin}) {
  const classes = useStyles();

  const handleKeyPress = e => {
    if(e.key === 'Enter') onLogin();
  }
  return (
    <div className={classes.root}>
      <div className={classes.passwordWrap}>
        <TextField
          type="password"
          classes={{root: classes.inputRoot}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {password !== '' && <ClearIcon color="action" onClick={() => onInput({target:{name: 'password', value: ''}})} />}
                <img src={resources.eyeBlocked} alt="eyeBlocked" />
              </InputAdornment>
            ),
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
        <Button classes={{label: classes.btn}} color='primary' variant="contained" fullWidth={true} onClick={onLogin}>LOGIN</Button>
      </div>
    </div>
  );
}
