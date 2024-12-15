const fs=require("fs");

// Sync....
fs.writeFileSync("./3_1_test.txt","Hey There")
fs.writeFileSync("./3_1_test.txt","Hello world") // this will overwrite "Hey There" in file