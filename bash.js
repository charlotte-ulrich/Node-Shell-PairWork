// const { fstat } = require("node:fs");
const fs = require("fs");
const fsPromises = require('fs').promises;

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const pwd = process.cwd();
  if (cmd === "pwd") {
    process.stdout.write(pwd);
  }
  if (cmd === "ls") {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt > ");
      }
    });
  }
//   if (cmd === 'cat') {
//     fs.promises.readFile("./bash").then(function(result) { 
//     process.stdout.write('' + result); 
// }) 
// .catch(function(error) { 
//    process.stdout.write((error); 
// })
// );
//   }

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    const pwd = process.cwd();
    if (cmd === "pwd") {
      process.stdout.write(pwd);
    }
    process.stdout.write("You typed: " + cmd);
  });
};

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("prompt > ");
        }
      });
    }
    process.stdout.write("You typed: " + cmd);
  });
};
