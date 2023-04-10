function Bubble(bar_height) {
    const moves = [];
    for(let i=0; i<actual_array_size; ++i) {
        let count = 0;
        for(let j=0; j<actual_array_size-1-i; ++j) {
            moves.push({
                indices:[j,j+1],
                type:"noSwap"
            });
            if(bar_height[j] > bar_height[j+1]) {
                count ++;
                [bar_height[j], bar_height[j+1]] = [bar_height[j+1], bar_height[j]];
                moves.push({
                    indices:[j,j+1],
                    type:"swap"    
                });
            }
        }
        if(count === 0)
            break;
    }
    return moves;
}