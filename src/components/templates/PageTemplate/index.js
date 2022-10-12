import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  headerWrap: {
    backgroundColor: theme.color.white,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    height: '50px',
    zIndex: '1000',
    top: 0,
    left: 0,
    right: 0,
  },
  headerWrapSearch: {
    backgroundColor: theme.color.white,
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    position: 'fixed',
    height: '100px',
    zIndex: '1000',
    top: 0,
    left: 0,
    right: 0,
  },
  contentWrap: {
  },
  contentSearch: {
    margin: '100px auto 0',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '600px',
    padding: '0 20px',
  },
  content: {
    margin: '50px auto 0',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '600px',
    padding: '0 20px',
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
