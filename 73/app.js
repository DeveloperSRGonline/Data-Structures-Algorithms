let prices = [7,1,5,3,6,4];
function maxProfit(prices){
    let minprice = prices[0]
    let maxprofit = 0;
    for(let i = 1;i<prices.length;i++){
        if(prices[i] < minprice){
            minprice = prices[i]
        }else if(prices[i] - minprice > maxprofit){
            maxprofit = prices[i] - minprice;
        }
    }
    return maxProfit;
}
console.log(maxProfit(prices)); // Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
// Time Complexity: O(n)
// Space Complexity: O(1)