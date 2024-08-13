'''
from collections import deque
k = 5
nums = [1,2,3,4]
i = 0
size = len(nums)
newsize = len(nums) - k
temp = k
resultArr = nums[:newsize]
while k != 0:
    nums[i] = nums[size - k]
    k = k - 1
    i = i + 1
for n in resultArr:
    if temp == len(nums):
        break
    nums[temp] = n
    temp = temp + 1
print(nums)

print(resultArr)
'''
prices = [2,3,4,1]
temp = prices[:len(prices)-1]
print(temp)
print(prices)
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        count = 0
        size = len(prices)
        if len(prices) == 1:
            return 0
        for i in range(size - 1):
            if prices[i] > prices[i+1]:
                count = count + 1
        if count == size - 1:
            return 0
        buy = min(prices)
        if prices.index(buy) == size - 1:
                buy= min(prices[:size-1])
                buy = max(prices) - buy
                return buy
        else:
            maximum = 0
            if prices.index(min(prices)) > prices.index(max(prices)):
                maximum = max(prices[prices.index(min(prices)):])
                buy = min(prices)
                buy = maximum - buy
                return buy
            else:
                buy = min(prices)
                maximum = max(prices)
                return maximum - buy
        return 0
"""
 buy = min(prices)
        maxProfit = max(prices) - buy
        def detMax(maxProfit):
            buy = min(prices)
            if prices.index(buy) == size - 1:
                    buy= min(prices[:size-1])
                    buy = max(prices) - buy
                    maxProfit = buy
                    return maxProfit
            else:
                maximum = 0
                if prices.index(min(prices)) > prices.index(max(prices)):
                    maximum = max(prices[prices.index(min(prices)):])
                    buy = min(prices)
                    buy = maximum - buy
                    maxProfit = buy
                    return maxProfit
                else:
                    buy = min(prices)
                    maximum = max(prices)
                    maxProfit = maximum - buy
                    return maxProfit
                
            
        if detMax(maxProfit) < maxProfit:
                maxProfit = detMax(maxProfit)
        else:
                return maxProfit    
        return maxProfit
"""