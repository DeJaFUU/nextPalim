import React from 'react';
import Link from 'next/link'

import SignUpPage from '../../pages/SignUp'
import LogIn from '../../pages/LogIn'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
    margin: 'auto',
    height: '65px',
    width: '910px',
    backgroundColor: 'black'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(  )  {
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenSecond = () => {
    setOpenSecond(true);
  };
  const handleCloseSecond = () => {
    setOpenSecond(false);
  };


  return (
  <React.Fragment>
    <CssBaseline />
      <AppBar position="sticky" color="secondary" elevation={0} className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
          <DashboardIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Palim - Meet your friends from tomorrow!
          </Typography>
          <nav>
            <Link variant="button" color="textSecondairy" href="/Features" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textSecondairy" href="/Online" className={classes.link}>
              Online
            </Link>
          </nav>
          <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
          onClick={handleClickOpenSecond}
          >
            Login
          </Button>
          <Dialog open={openSecond} onClose={handleCloseSecond} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign-in!</DialogTitle>
          <DialogContent>
            <LogIn />
          </DialogContent>
          </Dialog>
          <Button
          href="#"
          color="primary"
          variant="outlined"
          className={classes.link}
          onClick={handleClickOpen}
          >
            Registrierung
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign-up!</DialogTitle>
          <DialogContent>
            <SignUpPage />
          </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
};

