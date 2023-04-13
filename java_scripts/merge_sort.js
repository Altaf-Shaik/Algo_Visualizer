function Concat(arr, low, mid, high) {
    let temp = [];
    let left=low, right=mid+1;
    while(left<=mid && right<=high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid) {
        temp.push(arr[left]);
        left++;
    }
    while(right<=high) {
        temp.push(arr[right]);
        right++;
    }
    for(let i=low; i<=high; ++i) {
        arr[i] = temp[i-low];
    }
}

function Merge(arr, low, high) {
    if(low >= high) {
        return;
    }
    let mid = Math.floor((low+high)/2);
    Merge(arr,low,mid);
    Merge(arr,mid+1,high);
    Concat(arr,low,mid,high);
    // return moves;
}
