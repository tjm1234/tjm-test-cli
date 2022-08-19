#! /usr/bin/env node
const { Command } = require('commander')
const package = require('../package.json')
// const actionsMap = require('./actionsMap')
const program = new Command()
require('../lib/events')(program)

program.version(package.version);

program
    .command("create <name>")
    .description("使用命令tjm创建一个项目 tjm cli")
    .option("-f,--force", 'override')
   // .examples('feat create hello-world')
    .action(async(...args) => {
        let cmd;
        const params = []
      for (let i = 0; i < args.length; i++) {
        const p = args[i]
        if (p instanceof Command) {
          cmd = p
          break
        } else {
          params.push(p)
        }
      }
      require(`../lib/actions/create`)(...params, cmd)
    });


    // 定义命令
// Object.keys(actionsMap).forEach((key) => {
//     const value = actionsMap[key]
//     const { command = key, alias, description, options } = value
//     const cmd = program.command(command)
//     if (alias) cmd.alias(alias)
//     if (description) cmd.description(description)
//     if (options) {
//       if (Array.isArray(options[0])) {
//         options.forEach((option) => cmd.option(...option))
//       } else {
//         cmd.option(...options)
//       }
//     }
//     cmd.action((...args) => {
//       const params = []
//       let cmd
//       for (let i = 0; i < args.length; i++) {
//         const p = args[i]
//         if (p instanceof Command) {
//           cmd = p
//           break
//         } else {
//           params.push(p)
//         }
//       }
//       require(`../lib/actions/${key}`)(...params, cmd)
//     })
//   })
program.parse(process.argv);