/**
 * Created by yvanme on 2016-3-14.
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");