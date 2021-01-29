import React, { useState } from "react";

import { Name } from "./Name";
import { Url } from "./Url";
import {Prop} from './Prop'
import { Last } from "./Last";
export const CreateApi = (props) => {
  const [page, setpage] = useState("name");

  return page === "name" ? (
    <Name {...props} setpage={setpage} />
  ) : page === "url" ? (
    <Url {...props}  setpage={setpage}/>
  ) : page === "prop" ? (
   <Prop {...props} setpage={setpage}/>
  ) : page === "last" ?
  (
     <Last {...props}/>
  ):
    (
    <Name {...props}  setpage={setpage} />
  );
};
