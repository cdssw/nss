import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as resources from "constants/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'calc(var(--vh, 1vh) * 100)',
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
  logoTitle: {
    fontFamily: 'AppleSDGothicNeoB00',
    fontSize: '80px'
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
  }
}));

export default function LoginTemplate(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoWrap}>
        <div className={classes.logoTitle}>NSS</div>
        {/* <img className={classes.logo} src={resources.imgLogoLarge2x} alt="logo" /> */}
      </div>
      <div className={classes.stretch}></div>
      <div className={classes.contentWrap}>
        <section className={classes.content}>
          {props.children}
        </section>
      </div>
    </div>
  );
}
