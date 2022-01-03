var a = "私の彼氏はこの人ですよ"; // typeof  string
var b = new String("私の彼氏はこの人ですよ"); // typeof object
console.log(typeof a);
console.log(typeof b);
var c = a.constructor == b.constructor? true:false;
console.log(c);
var d = typeof a == typeof c? true:false;
console.log(d);

var num = 123455;
var num1 = 233333;
console.log(num.length);
console.log(num1.length);



/* var num2 = new Number(12345677);
console.log(typeof num2);


var e = 'abcoefoxyozzopp';
var cishu = 0;
function dd(){
    var m = e.indexOf('o');
    if(m != -1){
    for(m = 0; m < e.length; m++){
        e.indexOf('o',m + 1);

    }
}
}
 */




