import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    width: '45.1px',
    height: '35px',
  },
  space: {
    flexGrow: 1,
  },
  userName: {
    paddingRight: '5px',
  },
}));

export default function Header({userInfo, path, onLogout}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={resources.imgLogo2x} alt="logo" />
      <div className={classes.space}></div>
      <div>
        <Link to={path}>
          <Button onClick={onLogout}>로그아웃</Button>
        </Link>
      </div>
    </div>
  );
}
