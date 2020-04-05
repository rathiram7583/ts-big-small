var BigSmall = /** @class */ (function () {
    function BigSmall(num) {
        this.num = [];
        this.num = num;
    }
    BigSmall.prototype.small = function () {
        return Math.min.apply(Math, this.num);
    };
    BigSmall.prototype.big = function () {
        return Math.max.apply(Math, this.num);
    };
    return BigSmall;
}());
var bigSmall = new BigSmall([2, 14, 78, 66, 98, 45, 56, 34, 83]);
var small = bigSmall.small();
var big = bigSmall.big();
console.log("The Small  number in an Array is" + small);
window.document.body.textContent += "\"The small number in an Array is \" " + small;
console.log("The Big number in an Array is" + big);
window.document.body.textContent += "\"The Big number in an Array is \" " + big;
