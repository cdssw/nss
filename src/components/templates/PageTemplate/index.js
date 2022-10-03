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
  contentWrap: {
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

  const content = props.imageWrap ? classes.imageContent : classes.content;

  return (
    <div className={classes.root}>
      <header className={classes.headerWrap}>
        {props.header}
      </header>
      <section className={classes.contentWrap}>
        <div className={content}>
          {props.loading &&
            <div className={classes.loading}>
              <CircularProgress size={30} />
            </div>
          }
          {props.children}
        </div>
      </section>
    </div>
  );
}
