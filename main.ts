class BigSmall{
    num:Array <number>=[];
    /*big:Array <number>=[0];
    small:Array <number>=[0];
    arrLen:number=this.num.length;*/
    
    constructor(num:Array<number>/*big:Array<number>,small:Array<number>*/)
    {
        this.num=num;
        /*this.big=big;
        this.small=small;*/
    }
    small():number
    {
        return Math.min(...this.num);

    }
    big():number
    {
        return Math.max(...this.num);
    }
    

}
const bigSmall=new BigSmall([2,14,78,66,98,45,56,34,83]);
const small=bigSmall.small();
const big=bigSmall.big();
console.log("The Small  number in an Array is" +small);
window.document.body.textContent +=`"The small number in an Array is " ${small}`;
console.log("The Big number in an Array is" +big);
window.document.body.textContent +=`"The Big number in an Array is " ${big}`
