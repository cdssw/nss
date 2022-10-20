import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '0 20px'
  },
  content: {
    flexGrow: 1,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  songTitle: {
    top: '31px',
    fontSize: '15px',
    fontFamily: 'AppleSDGothicNeoB00',
    color: theme.palette.text.secondary
  },
  space: {
    borderBottom: '1px solid ' + theme.palette.action.disabledBackground,
    margin: '10px 0 15px 0'
  },
  addedInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: theme.palette.action.disabled,
    alignItems: 'end',
  },
  addLeft: {
    width: '40px',
    textAlign: 'left',
  },
  addRight: {
    width: '40px',
    textAlign: 'right',
  }
}));

export default function AddedInfo(props) {
  const classes = useStyles();

  const data = Object.keys(props.contents).length > 0 && props.contents.data.content;

  return (
    <div className={classes.root}>
      {data &&
        <div className={classes.content}>
          <div className={classes.addedInfo}>
            <div className={classes.addLeft}>{data[0].source.category}</div>
            <div className={classes.songTitle}>{data[0].source.songTitle}</div>
            <div className={classes.addRight}>{data[0].source.duration}</div>
          </div>
          <div className={classes.space}></div>
        </div>
      }
    </div>
  );
}
