import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
    marginBottom: '3px',
    borderRadius: '5px',
  },
  content: {
    flexGrow: 1,
    boxSizing: 'border-box',
    padding: '10px',
    borderBottom: '1px solid ' + theme.palette.action.disabledBackground
  },
  titleWrap: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  songTitle: {
    top: '31px',
    fontSize: '14px',
    color: theme.palette.text.secondary
  },
  songContent: {
    fontFamily: 'AppleSDGothicNeoB00',
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '15px'
  },
  highlight: {
    color: theme.palette.error.light,
    fontWeight: 'bold',
  }
}));

export default function Card({item, onContentClick}) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={onContentClick}>
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
        <div className={classes.titleWrap}>
          <div className={classes.songTitle}>{item.source.songNo}장 {item.source.songTitle}</div>
          <div className={classes.songTitle}>{item.source.duration}</div>
        </div>
      </div>
    </div>
  );
}
