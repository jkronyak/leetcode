class Solution:
    def maxProfit(self, prices: List[int]) -> int:
    
        max_profit = 0
        min_buy = prices[0]
        cur_profit = 0

        for i in prices:
            cur_profit = i - min_buy
            max_profit = max(cur_profit, max_profit)
            min_buy = min(min_buy, i)
        
        return max_profit