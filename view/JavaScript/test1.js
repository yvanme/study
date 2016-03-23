/**
 * Created by yvanme on 2016-3-21.
 */
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count); //20，没有变化
alert(result); //30