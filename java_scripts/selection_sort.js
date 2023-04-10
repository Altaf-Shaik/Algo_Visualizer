function SelectionSort(array) {
    const moves = [];
    let i, j;
    for(i=0; i<actual_array_size-1; ++i) {
        let smallestElement = i;
        for(j=i+1; j<actual_array_size; ++j) {
            if(array[j] < array[smallestElement]) {
                smallestElement = j;
            }
            moves.push({
                indices: [j,smallestElement],
                type: "noSwap"
            });
        }
            if(smallestElement != i) {
                [array[i],array[smallestElement]] = [array[smallestElement],array[i]];
                moves.push({
                    indices: [i,smallestElement],
                    type: "swap"
                });
            }
    }
   return moves;
}