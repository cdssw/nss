import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
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
    flexGrow: 1,
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
    padding: '0 20px',
    maxWidth: '600px',
  },
  footerWrap: {
    flexBasis: '50px',
    backgroundColor: 'white',
    padding: '10px 0 20px 0',
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
          {props.children}
        </section>
      </div>
      <div className={classes.stretch}></div>
    </div>
  );
}
