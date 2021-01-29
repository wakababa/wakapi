import React from 'react'
import { TextField, Button, Grid } from "@material-ui/core";
import {createApi} from 'wakapi'
export const Last = (props) => {
    
    return(
        <Grid container direction="column" justify="center" alignContent="center">
           <Button onClick={()=>createApi({
               apiname:props.apiname,
               prop:props.prop,
               url:props.url
           })}  >OKAY</Button>
      </Grid>
    )
}
