#!/usr/bin/env node
const { createApi } = require("./generate-api/index");
module.exports = {createApi};

const {ƒs} = require("fs")
const fs = require("fs");
// const inquirer = require('inquirer');
// inquirer
//     .prompt([
//         {type:'input',message:'Api Name :' ,name:'apiname' },
//         {type:'input',message:'Url :' ,name:'url' },
//         {type:'input',message:'Add Database :' ,name:'prop' },
//     ])
//     .then(answers => {
//         createApi({
//             apiname:answers.apiname,
//             url:answers.url,
//             prop:JSON.parse(answers.prop)
//         })
//     });

// const config =  fs.readFile("wakapi.config.json", (err,data) =>{
//     if(err)
//         throw  err
//     else
//       return  data
// });
//
// console.log("config",config)
fs.readFile('wakapi.config.json', (err, data) => {
    if (err) throw err;
    let configs = JSON.parse(data);

    for (let config of Object.keys(configs.tables)) {
        createApi({
            apiname:config,
            url:configs.mongoDbUrl,
            prop:configs.tables[config]
        })
    }

});

