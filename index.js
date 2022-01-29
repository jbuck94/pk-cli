#! /usr/bin/env node
const { program } = require("commander");
const path = require("path");
const fs = require("fs");
const { cwd } = require("process");

const currentDirectory = cwd(); //path.join(path.dirname(fs.realpathSync(__filename)));
const configFile = require(`${currentDirectory}/package.json`);

Object.keys(configFile).forEach((key) => {
  program
    .command(key)
    .description(`View the ${key} field in your package.json`)
    .action(() => {
      console.log(configFile[key]);
    });
});

program.parse();
