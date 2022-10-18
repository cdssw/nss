import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '600px',
    padding: '0 13px 0 12px',
    height: '100%',
    flex: 1,
  },
  title: {
    fontFamily: 'AppleSDGothicNeoL00',
    textAlign: 'center',
  },
  space: {
    width: '34px',
  }
}));

export default function TitleHeader(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = e => {
    props.onBack ? props.onBack() : history.goBack(1);
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleBack}
      >
        <img src={resources.arrowLeft} alt="arrowLeft" />
      </IconButton>
      <div className={classes.title}>{props.children}</div>
      <div className={classes.space}></div>
    </div>
  );
}
