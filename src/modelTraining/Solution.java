class Solution {
    public int majorityElement(int[] nums) {
        int max = 0;
        if(nums.length == 1){
            return nums[0];
        }
        for(int i = 0;i < nums.length - 1;i++){
            if(nums[i] > max){
                max = nums[i];
            }
        }
        System.out.println(max);
        return max;
        }
        
        public static void main(String[] args){
            Solution object = new Solution();
            int arr[] = {4,5,4};
            object.majorityElement(arr);
        }
    }
