import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    marginBottom: '15px',
  },
  content: {
    flexGrow: 1,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  songTitle: {
    top: '31px',
    fontSize: '16px',
    fontFamily: 'AppleSDGothicNeoB00',
    color: theme.palette.text.secondary
  },
  space: {
    borderBottom: '1px solid ' + theme.palette.action.disabledBackground,
    margin: '10px 0 15px 0'
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

export default function Content(props) {
  const classes = useStyles();

  const data = Object.keys(props.contents).length > 0 && props.contents.data.content;

  return (
    <div className={classes.root}>
      {data &&
        <div className={classes.content}>
          <div className={classes.songContent}>
            {
              data.map((c, i) => {
                return (
                  <Fragment key={i}>
                    <span>
                      {c.highlight.songContent
                        ? c.highlight.songContent.split('<b>').map((m, index) => {
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
                        : c.source.songContent
                      }
                    </span>
                    <p />
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  );
}
