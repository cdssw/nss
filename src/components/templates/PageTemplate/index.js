import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(var(--vh, 1vh) * 100)',
  },
  headerWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    height: '110px',
    zIndex: '1000',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.default
  },
  headerWrapSearch: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    position: 'fixed',
    height: '110px',
    zIndex: '1000',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.default
  },
  contentWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentSearch: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '110px 20px 0',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '600px',
    padding: '110px 20px 0',
  },
  loading: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}));

export default function PageTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.search ?
        <>
          <header className={classes.headerWrapSearch}>
            {props.header}
            {props.search}
          </header>
          <section className={classes.contentWrap}>
            <div className={classes.contentSearch}>
              {props.loading &&
                <div className={classes.loading}>
                  <CircularProgress size={30} />
                </div>
              }
              {props.children}
            </div>
          </section>
        </>
        :
        <>
          <header className={classes.headerWrap}>
            {props.header}
            {props.addedInfo}
          </header>
          <section className={classes.contentWrap}>
            <div className={classes.content}>
              {props.loading &&
                <div className={classes.loading}>
                  <CircularProgress size={30} />
                </div>
              }
              {props.children}
            </div>
          </section>
        </>
      }
    </div>
  );
}
