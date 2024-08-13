"""
import pandas as pd
import os

data = {
    'model-name':[
        'DALL-E','GPT-3','DeepArt','VoiceGenerator','Website Builder'
    ],
    'model-type':[
        'Image Generator','Text Generator', 'Image Generator', 'Voice Generator', 'Website Generator'
    ],
    'url':[
        'https://openai.com/dall-e/', 'https://openai.com/gpt-3/', 'https://deepart.io/', 'https://voicegenerator.io/', 'https://websitebuilder.com/'
    ],
    'is free':[
        'No' , 'No', 'Yes', 'Yes', 'No'
    ]
}

df = pd.DataFrame(data)


df.to_csv('ai_model.csv', index=False)
print("Dataset created and saved as ai_model.csv")
"""
"""
buy = float('inf')
sell = 0
maxbruh = 0
prices = [3,2,6,5,0,3]
for price in prices:
    if price < buy:
        buy = price 
    elif price - buy > maxbruh :
        sell = price
        maxbruh = sell - buy
print(maxbruh)
"""
"""
myMap  = {}
arr = [3,4,3]
bruh = []
target = 6
j = len(arr) - 1
i = 0
for i in range(len(arr)):
    myMap[i] = arr[i]
while i != len(arr):
    
    if myMap[i] + myMap[j] == target:
        bruh = [i,j]
        print(bruh)
    j = j - 1
    if i == j:
        i = i+1
        j = len(arr) - 1
print(bruh)

prices = [7,1,5,3,6,4]
buy = float('inf')
maxbruh = 0
for price in prices:
            if price < buy:
                buy = price
            elif price - buy > maxbruh:
                maxbruh = price - buy
print(maxbruh)
newarr = prices[prices.index(buy)+1:]
buy = float('inf')
tempbruh = 0
for price in newarr:
            if price < buy:
                buy = price
            elif price - buy > tempbruh:
                tempbruh = price - buy        
print(tempbruh)
print(maxbruh + tempbruh)

prices = [7,1,5,3,6,4]
count = 0
for i in range(len(prices) - 1):
    if prices[i] > prices[i + 1]:
        count = count + 1
if count == len(prices) - 1:
    print("bruh")
buy = 0
def MaxBruh(bruharr):
    buy = float('inf')
    for bruh in bruharr:
        if bruh < buy:
            buy = bruh
    return buy
maxProfit = 0
kao = MaxBruh(prices)
firstarr = prices[:prices.index(kao)+1]
bruharr = prices[prices.index(kao)+1:]
kao2 = MaxBruh(bruharr)
i = 0
j = len(firstarr) - 1
k = len(bruharr) - 1
buy = min(prices)
max2 = 0
while i != len(prices):
    if kao < prices[j]:
        maxProfit = prices[j] - kao
        if kao2 < bruharr[k]:
            max2 = bruharr[k] - kao2
    k = k - 1
    if k < 0:
        break
    j = j - 1
    if i  == j:
        i = i + 1
        j = len(firstarr) - 1
print(maxProfit+max2)
""" 

def maxProfit(prices):
        if len(prices) == 1:
            return 0
        l = prices.index(min(prices))
        if l == len(prices) - 1 and len(prices) == 3:
            l = prices.index(min(prices[:l]))
        r = l + 1
        maxP = 0
        profitSum = 0
        while r < len(prices):
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                profitSum = profit + profitSum
      
            l = l + 1
            r = r + 1
        return profitSum
prices = [2,1,2,0,1]
print(maxProfit(prices))
print(prices.index(min(prices)))