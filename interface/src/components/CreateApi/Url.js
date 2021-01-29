import React from 'react'
import { TextField, Button, Grid } from "@material-ui/core";
export const Url = (props) => {
    return(
        <Grid container direction="row" justify="center">
        <TextField
          onChange={(e) =>
            props.setapi({ ...props.api, url: e.target.value })
          }
          id="outlined-basic"
          label="Url Name"
          variant="outlined"
        />
        <Button
          style={{ marginLeft: "5px" }}
          variant="contained"
          color="primary"
          onClick={()=>props.api.apiname !== "" ? props.setpage("prop") : null}
        >
          Next
        </Button>{" "}
      </Grid>
    )
}
