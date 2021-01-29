#!/usr/bin/env node
var { createApi } = require("./generate-api/index");
module.exports = {createApi};

var inquirer = require('inquirer');
inquirer
  .prompt([
   {type:'input',message:'Api Name :' ,name:'apiname' },
   {type:'input',message:'Url :' ,name:'url' },
   {type:'input',message:'Add Database :' ,name:'prop' },
  ])
  .then(answers => {
    createApi({
      apiname:answers.apiname,
      url:answers.url,
      prop:JSON.parse(answers.prop)
    })
  });