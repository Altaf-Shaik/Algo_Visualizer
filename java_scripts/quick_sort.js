function partition(arr,low,high,moves) {
    let pivot = arr[low];
    moves.push({
        indices:[low,low],
        type:"pivot"
    });
    let i=low, j=high;
    while(i < j) {
        while(arr[i]<=pivot) {
            i++;
            moves.push({
                indices:[i,j],
                type:"noSwap"
            });
        }
        while(arr[j]>pivot) {
            j--;
            moves.push({
                indices:[i,j],
                type:"noSwap"
            });
        }
        if(i < j) {
            [arr[i],arr[j]] = [arr[j],arr[i]];
            moves.push({
                indices:[i,j],
                type:"swap"
            });
        }
    }
    [arr[low],arr[j]] = [arr[j],arr[low]];
    moves.push({
        indices:[low,j],
        type:"swap"
    });
    return j;
}

function Quick(arr, low, high, moves) {
    if (low >= high) {
        return;
    }
    let pIndex= partition(arr, low, high, moves);
    Quick(arr, low, pIndex - 1, moves);
    Quick(arr, pIndex + 1, high, moves);
    return moves;
}