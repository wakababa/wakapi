import React from 'react'
import { TextField, Button, Grid } from "@material-ui/core";
export const Name = (props) => {
    
    return(
        <Grid container direction="row" justify="center">
        <TextField
          onChange={(e) =>
            props.setapi({ ...props.api, apiname: e.target.value })
          }
          id="outlined-basic"
          label="Database Name"
          variant="outlined"
        />
        <Button
          style={{ marginLeft: "5px" }}
          variant="contained"
          color="primary"
          onClick={()=>props.api.apiname !== "" ? props.setpage("url") : null}
        >
          Next
        </Button>{" "}
      </Grid>
    )
}
