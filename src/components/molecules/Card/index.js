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
    top: '31px',
    color: '#707070',
    fontSize: '13px'
  },
  songContent: {
    fontFamily: 'AppleSDGothicNeoB00',
    color: '#3e3e3e',
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '14px'
  },
}));

export default function Card({item}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.songContent}>{item.highlight.songContent ? item.highlight.songContent : item.source.songContent}</div>
        <div className={classes.songTitle}>새노래 {item.source.songNo}장 {item.highlight.songTitle ? item.highlight.songTitle : item.source.songTitle}</div>
      </div>
    </div>
  );
}
