import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export const Footer = (props) => {
    return(
        <footer >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
    )
}
