// 121. Best Time to Buy and Sell Stock - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
        if(prices[i] < min) min = prices[i]
    }
    
    return max;
};