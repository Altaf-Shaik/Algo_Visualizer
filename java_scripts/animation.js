let speed = 10;
speed_val.addEventListener("input",handlespeed);
function handlespeed() {
    actual_speed = speed_val.value;
    switch(actual_speed) {
        case '1':
            speed = 1500;
            break;
        case '2':
            speed = 1000;
            break;
        case '3':
            speed = 100;
            break;
        case '4':
            speed = 10;
            break;
        case '5':
            speed = 1;
            break;
    }
    value_of_speed_slider.innerHTML = (speed/1000) + " sec";
}


// Let's animate bars
function animateBars(moves) {
    if(moves.length == 0) {
        generateBars();
        return;
    }

    const move = moves.shift();
    const[i,j] = move.indices;

    if(move.type === "swap")
        [bar_height[i],bar_height[j]] = [bar_height[j],bar_height[i]]; 

    generateBars(move);
    setTimeout(function(){
        animateBars(moves);
    },speed);
}
