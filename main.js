var BigSmall = /** @class */ (function () {
    /*big:Array <number>=[0];
    small:Array <number>=[0];
    arrLen:number=this.num.length;*/
    function BigSmall(num /*big:Array<number>,small:Array<number>*/) {
        this.num = [];
        this.num = num;
        /*this.big=big;
        this.small=small;*/
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
