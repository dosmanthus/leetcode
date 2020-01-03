/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 轉成文字
    // let neg = x < 0 ? true : false;
    // let str = Math.abs(x).toString().split("").reverse().join("");
    // if (x < Math.pow(2, 31)) {
    //   if (neg) str = `-${str}`;
    //   return parseFloat(str);
    // }
    // return 0;

    // 更好的寫法
    let str = Math.abs(x).toString().split("").reverse().join("");
    return str > 2**31 ? 0 : str * Math.sign(x);
};

console.log(reverse(1534236469));
