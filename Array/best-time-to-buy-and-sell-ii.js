var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;
    
    for (let n = 1; n < prices.length; n++){
        if (prices[n] > buyPrice){
            profit = profit + prices[n] - buyPrice
            buyPrice = prices[n]
        }
        else {
            buyPrice = prices[n]
        }
    }
    return profit
};
