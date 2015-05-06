var fs = require('fs');
var args = process.argv;

// Check filename if has .conf file
flname = args[2];
flname = flname.split(".");

if(flname[1] === "conf"){
  console.log("yes it has .conf extension continue!");
}else{
  console.log("Error! Please enter .conf extension!")
}


// // check if the file exist
// fs.stat(flname, function (err){
//   if (err){
//     console.log("file doesn't exist create file");

//   }else{
//     console.log("File exists, change filename");
//   } 
// });
