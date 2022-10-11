import React, { Fragment } from 'react';
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
  highlight: {
    color: 'red',
    fontWeight: 'bold',
  }
}));

export default function Card({item}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.songContent}>
          {item.highlight.songContent
            ? item.highlight.songContent.split('<b>').map((m, index) => {
              if(m.split("</b>").length > 1) {
                return (
                  <Fragment key={index}>
                    <span className={classes.highlight}>{m.split("</b>")[0]}</span>
                    {m.split("</b>")[1]}
                  </Fragment>
                )
              } else {
                return m;
              }
            })
            : item.source.songContent
          }
        </div>
        <div className={classes.songTitle}>새노래 {item.source.songNo}장 {item.source.songTitle}</div>
      </div>
    </div>
  );
}
