function Insertion(array) {
    const moves = [];
    let i, key, j; 
    for (i = 1; i < actual_array_size; i++)
    { 
        
        key = array[i]; 
        j = i - 1; 
        
        while (j >= 0 && array[j] > key)
        {   
            
            moves.push({
                indices: [j+1,j],
                type: "swap"
            });
            array[j + 1] = array[j]; 
            j = j - 1; 
        } 
        array[j + 1] = key; 
        moves.push({
            indices: [j+1,key],
            type: "noSwap"
        });
        
        
    } 
    return moves;

}