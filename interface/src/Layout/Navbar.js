import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'
export const Navbar = (params) => {
   return(
    <AppBar position="relative">
    <Toolbar>
      <Typography  variant="h6" color="inherit" noWrap>
      Wakapi
      </Typography>
    </Toolbar>
  </AppBar>
   )
}
