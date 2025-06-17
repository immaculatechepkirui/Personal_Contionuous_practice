#  Given an integer array arr[]. You need
#  to find the maximum sum of a subarray.   

def max_sub_array(arr):
    sum = 0
    max_sum = 0

    for num in arr:
        sum += num
        max_sum = max(sum, max_sum)
        if sum < 0:
            sum = 0
    if max_sum < 0:
        max_sum = 0

    return max_sum

    
