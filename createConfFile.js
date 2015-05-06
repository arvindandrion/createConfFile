var fs = require('fs');
var chalk = require('chalk');
var args = process.argv;

//*****************************************************
// #1 Check if has validation
//*****************************************************
if(args[2] && args[3]){
	console.log(chalk.green("nice work! Its two arguments"));
	checkConfFile(args[2]); // if all is good go to #2
}else{
	console.log(chalk.red("im expecting two arguments ex: name.conf, domainName"));
	return false;
}

//*****************************************************
// #2 Check if first arguement has conf file
// The passed var args2 is args[2] in line 2 whichi is filename
//*****************************************************
function checkConfFile() {
	flname = args[2];
	flname = flname.split(".");
	if(flname[1] === "conf"){
	  console.log(chalk.green("Yes! It has .conf extension continue!"));
	  checkFilenameExist(args[2]); // all good go to #3
	}else{
	  console.log(chalk.red("Error! Please enter .conf extension!"));
	  return false;
	}
}

//*****************************************************
// #3 Check if filename exist
// The passed var args2 is args[2] in line 2 whichi is filename
//*****************************************************
function checkFilenameExist() {
	fs.stat(args[2], function (err){
	  if (err){
	    console.log(chalk.green("file doesn't exist create file"));
	    createFile(args[2]);// all good go to #4
	  }else{
	    console.log(chalk.red("File exists, change filename"));
	   	return false;
	  } 
	});
}

//*****************************************************
// #4 Create File
// The passed var args2 is args[2] in line 2 whichi is filename
//*****************************************************
function createFile() {
	var content = "content\n" + 
	"content2";
	fs.writeFile(args[2], content, function (err) {
	  if (!err) {
	  	console.log(chalk.green("File created! Congrats Jarvin!!!!!"));
	  }else{
	  	console.log(chalk.red("Can't write files"));
	  }
	});
}
