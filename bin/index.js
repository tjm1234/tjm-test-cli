#! /usr/bin/env node

console.log("tjm start 22222");

const program = require("commander");
//  commander  添加的帮助信息
const package = require("../package.json");

program.version(package.version);

program
    .command("create <name>")
    .description("使用命令tjm创建一个项目 tjm cli")
    .option("-f,--force", 'override')
    .action(async(name, cmd) => {
        console.log(name);
        console.log(cmd);
    });
program.parse(process.argv);