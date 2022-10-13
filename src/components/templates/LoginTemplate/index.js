import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minHeight: '600px',
  }, 
  headerWrap: {
    flexBasis: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    flexGrow: 1,
    maxWidth: '600px',
  },
  arrowWrap: {
    padding: '20px',
  },
  logoWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px',
  },
  logo: {
    width: '154px',
    height: '129px',
  },
  contentWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: '60px 20px',
    maxWidth: '600px',
  },
  footerWrap: {
    flexBasis: '50px',
    backgroundColor: 'white',
    padding: '10px 0 20px 0',
  },
  loading: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
  stretch: {
    flexGrow: 1,
  }
}));

export default function LoginTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrap}>
      </div>
      <div className={classes.logoWrap}>
        <img className={classes.logo} src={resources.imgLogoLarge2x} alt="logo" />
      </div>
      <div className={classes.stretch}></div>
      <div className={classes.contentWrap}>
        <section className={classes.content}>
          {props.loading &&
            <div className={classes.loading}>
              <CircularProgress size={30} />
            </div>
          }
          {props.children}
        </section>
      </div>
    </div>
  );
}
