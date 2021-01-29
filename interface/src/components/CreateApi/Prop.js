import React, { useState  } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

export const Prop = (props) => {
  const [prop, setprop] = useState([]);
  const exam = {
    id: prop.length,
    name: "",
    type: "",
  };
  const handleEditType = (e, id, type) => {
    const data = prop;
    data[id][type] = e.target.value;
    setprop([...data]);
  };
 
  
  const handleSubmit = () => {
    let data = {}
    prop.map(item=> data[item.name] = item.type)
    console.log(data)
    props.setapi({
      ...props.api,
      prop:data
    })

  };
  return (
    <Grid container direction="column" justify="center" alignContent="center">
      {prop.map((item) => (
        <Box m={1}>
          <TextField
            value={item.name}
            onChange={(e) => handleEditType(e, item.id, "name")}
            id="outlined-basic"
            label={item.name.toUpperCase()}
            variant="outlined"
          />
          <FormControl style={{ minWidth: "120px", marginLeft: "5px" }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => handleEditType(e, item.id, "type")}
              value={item.type}
            >
              <MenuItem value="String">String</MenuItem>
              <MenuItem value="Number">Number</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ))}
      <Button
        style={{ marginTop: "5px" }}
        variant="contained"
        color="primary"
        onClick={() => setprop([...prop, exam])}
      >
        ADD DATA
      </Button>{" "}
      <Button
        style={{ marginTop: "5px" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          handleSubmit()
          props.setpage('last')
         
        }}
      >
        FİNİSH
      </Button>{" "}
    </Grid>
  );
};
