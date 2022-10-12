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
    maxWidth: '600px',
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
    color: theme.color.green,
    paddingRight: '5px',
  },
  avatarRoot: {
    width: '35px',
    height: '35px',
    padding: '1px 1px 0 0',
    border: '2px solid ' + theme.color.border,
    backgroundColor: theme.color.gray,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  avatarColor: {
    backgroundColor: theme.color.green,
  }
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
