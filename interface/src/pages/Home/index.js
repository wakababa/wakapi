import React,{useState} from "react";
import { Layout } from "../../Layout";
import {Typography,Box} from '@material-ui/core'
import { CreateApi } from "../../components/CreateApi";
export const Home = (props) => {
  const [api, setapi] = useState({
    apiname:"",
    prop:{},
    url:""
  })
  // .toLowerCase().trim().replace(" ", "")

  return (
    <Layout>
      <p></p>
      <CreateApi api={api} setapi={setapi}  />
    </Layout>
  );
};
