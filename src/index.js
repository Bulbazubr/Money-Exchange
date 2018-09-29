// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return { };
    }
    if  (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    var ans = {};

var h = Math.floor(currency/50);
if (h!=0) {
    ans.H = h;
}
var q = Math.floor((currency%50)/25);
    if (q!=0) {
        ans.Q = q;
    }
    var d = Math.floor(((currency%50)%25)/10);
    if (d!=0) {
        ans.D = d;
    }
    var n = Math.floor((((currency%50)%25)%10)/5);
    if (n!=0) {
        ans.N = n;
    }
    var p = Math.floor(((((currency%50)%25)%10)%5)/1);
    if (p!=0) {
        ans.P = p;
    }
    return ans;

}