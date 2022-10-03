import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    marginBottom: '10px',
    border: '1px solid ' + theme.color.border,
    borderRadius: '5px',
  },
  content: {
    flexGrow: 1,
    boxSizing: 'border-box',
    padding: '10px',
  },
  songTitle: {
    fontFamily: 'AppleSDGothicNeoB00',
    color: '#3e3e3e',
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  songContent: {
    top: '31px',
    color: '#707070',
    fontSize: '12px'
  },
}));

export default function Card({item}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.songTitle}>{item.title}</div>
        <div className={classes.songContent}>{item.address.sgg}</div>
      </div>
    </div>
  );
}
