/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const numberOfDays = prices.length;
    // we wouldn't make any profit if it's only 1 day
    if (numberOfDays === 1) {
        return 0;
    }
    // we wouldn't make any profit if it's only 2 days and minimum price was higher than maximum
    if (numberOfDays === 2 && prices[0] >= prices[1]) {
        return 0;
    }
    let maxProfit = 0;
    let currMin = prices[0];
    for (let index = 0; index < numberOfDays; index++) {
        let currentValue = prices[index];
        if (currentValue - currMin > maxProfit) {
            maxProfit = currentValue - currMin;
        }
        if (currMin > currentValue) {
            currMin = currentValue;
        }
    }
    return maxProfit;
};
