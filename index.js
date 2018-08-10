var exec = require('child_process').exec;


let hash =  Math.random();
{
  exec('git checout -b '+hash, function (error, stdOut, stdErr) {
    console.log(stdOut);
  });
}
