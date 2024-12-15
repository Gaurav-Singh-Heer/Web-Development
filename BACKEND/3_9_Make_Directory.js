const fs= require("fs");

fs.mkdirSync("my-docs");
fs.mkdirSync("my-docs/a/b",{recursive:true});